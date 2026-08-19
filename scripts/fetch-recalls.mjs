#!/usr/bin/env node
/**
 * fetch-recalls.mjs — SafePaws recall data pipeline (v2)
 *
 * Source: FDA "Animal & Veterinary — Recalls & Withdrawals" page.
 * Why not openFDA? The openFDA /food/enforcement dataset does NOT reliably
 * contain pet-food recalls (the 2021 Midwestern/Sportmix aflatoxin recall is
 * absent) and its product_description search returns human-food false positives
 * ("PET" bottles, "hush puppy" mix). The FDA animal-veterinary page is the
 * authoritative, current source and is server-rendered HTML we can parse.
 *
 * Output: recalls.json in the repo root, matching the Recall interface
 * (src/app/types.ts). Zero runtime dependencies (Node 18+ global fetch).
 */
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const SOURCE = 'https://www.fda.gov/animal-veterinary/safety-health/recalls-withdrawals';
const FDA_ORIGIN = 'https://www.fda.gov';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36';
const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'recalls.json');

// Retry configuration — the FDA site (on Akamai CDN) occasionally blocks
// GitHub Actions IP ranges transiently. Three attempts with backoff recovers
// from temporary rate-limiting without failing the whole workflow.
const RETRY_ATTEMPTS = 3;
const RETRY_BASE_MS = 8000; // 8 s, 16 s, 32 s

// Pathogen/toxin recalls are life-threatening → Class I (DANGER). Nutritional
// imbalances and foreign-material recalls → Class II (WARNING). This drives the
// red/yellow card styling in RecallCard.tsx.
const CLASS_I = /salmonella|listeria|aflatoxin|botulism|e\.?\s?coli|toxin|pathogen|contaminat/i;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWithRetry(url) {
  const headers = {
    'User-Agent': UA,
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.9',
    'Cache-Control': 'no-cache',
    'Pragma': 'no-cache',
  };

  for (let attempt = 1; attempt <= RETRY_ATTEMPTS; attempt++) {
    try {
      console.log(`[*] Attempt ${attempt}/${RETRY_ATTEMPTS}: fetching ${url}`);
      const res = await fetch(url, { headers });
      if (res.ok) return res;
      const msg = `HTTP ${res.status} ${res.statusText}`;
      if (attempt === RETRY_ATTEMPTS) throw new Error(`FDA fetch failed after ${RETRY_ATTEMPTS} attempts: ${msg}`);
      const wait = RETRY_BASE_MS * attempt;
      console.warn(`[!] ${msg} — retrying in ${wait / 1000}s…`);
      await sleep(wait);
    } catch (err) {
      if (attempt === RETRY_ATTEMPTS) throw err;
      const wait = RETRY_BASE_MS * attempt;
      console.warn(`[!] Fetch error: ${err.message} — retrying in ${wait / 1000}s…`);
      await sleep(wait);
    }
  }
}

function decode(s) {
  return (s || '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&amp;/g, '&').replace(/&#039;|&#39;|&rsquo;|&lsquo;/g, "'")
    .replace(/&quot;|&ldquo;|&rdquo;/g, '"').replace(/&nbsp;/g, ' ')
    .replace(/&lt;/g, '<').replace(/&gt;/g, '>')
    .replace(/\s+/g, ' ').trim();
}

function petType(text) {
  const t = text.toLowerCase();
  const dog = /\bdog|puppy|canine\b/.test(t);
  const cat = /\bcat|kitten|feline\b/.test(t);
  if (dog && !cat) return 'dog';
  if (cat && !dog) return 'cat';
  return 'both';
}

function parseRows(html) {
  const bodyMatch = html.match(/<tbody[^>]*>([\s\S]*?)<\/tbody>/i);
  if (!bodyMatch) return [];
  const rows = bodyMatch[1].match(/<tr[^>]*>[\s\S]*?<\/tr>/gi) || [];
  const out = [];
  for (const row of rows) {
    const cells = row.match(/<td[^>]*>[\s\S]*?<\/td>/gi) || [];
    if (cells.length < 5) continue;

    const dateAttr = (cells[0].match(/datetime="([^"]+)"/) || [])[1];
    const report_date = dateAttr ? dateAttr.slice(0, 10) : decode(cells[0]);

    const href = (cells[1].match(/href="([^"]+)"/) || [])[1] || '';
    const brand_name = decode(cells[1]);
    const product_description = decode(cells[2]) || brand_name;
    const reason_for_recall = decode(cells[3]);
    const recalling_firm = decode(cells[4]);

    if (!brand_name && !product_description) continue;

    const classification = CLASS_I.test(reason_for_recall) ? 'Class I' : 'Class II';
    out.push({
      recall_number: href ? href.split('/').filter(Boolean).pop() : `${report_date}-${brand_name}`.slice(0, 60),
      reason_for_recall,
      status: 'Ongoing',
      distribution_pattern: '',
      product_description: `${brand_name} — ${product_description}`.replace(/^ — /, ''),
      report_date,
      classification,
      severity: classification === 'Class I' ? 'DANGER' : 'WARNING',
      brand_name,
      recalling_firm,
      pet_type: petType(`${brand_name} ${product_description}`),
      city: '',
      state: '',
      voluntary_mandated: 'Voluntary: Firm initiated',
      recall_initiation_date: report_date.replace(/-/g, ''),
      source_url: href ? (href.startsWith('http') ? href : FDA_ORIGIN + href) : SOURCE,
    });
  }
  return out;
}

async function main() {
  console.log('[*] Fetching FDA animal-veterinary recalls…');
  const res = await fetchWithRetry(SOURCE);
  const html = await res.text();

  const recalls = parseRows(html).sort((a, b) => b.report_date.localeCompare(a.report_date));
  if (recalls.length === 0) throw new Error('Parsed 0 recalls — FDA page markup may have changed. Aborting so we do not overwrite good data with an empty file.');

  await writeFile(OUT, JSON.stringify(recalls, null, 2) + '\n', 'utf8');
  console.log(`[+] Wrote ${recalls.length} recalls to recalls.json`);
  for (const r of recalls.slice(0, 8)) {
    console.log(`    ${r.report_date} | ${r.classification} | ${r.recalling_firm.slice(0, 24).padEnd(24)} | ${r.product_description.slice(0, 50)}`);
  }
}

main().catch((e) => { console.error('[!]', e.message); process.exit(1); });
