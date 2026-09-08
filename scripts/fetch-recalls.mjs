#!/usr/bin/env node
/**
 * fetch-recalls.mjs — SafePaws recall data pipeline (v3)
 *
 * Primary source: FDA Drupal Views AJAX endpoint (POST to /views/ajax).
 *   This is the same JSON-over-AJAX call the browser makes when rendering
 *   the CVM recall table — it runs on a generic Drupal path that is NOT
 *   subject to the Akamai CDN IP-block that affects the /animal-veterinary/
 *   page path from GitHub Actions Azure IP ranges.
 *
 * Fallback source: FDA "Animal & Veterinary — Recalls & Withdrawals" page
 *   (direct HTML scrape). Works from residential/office IPs but blocked from
 *   GitHub Actions. Kept as fallback in case the AJAX view config changes.
 *
 * Why not openFDA? The openFDA /food/enforcement dataset does NOT reliably
 * contain pet-food recalls (Oma's Pride Aug 2026, Sportmix/Midwestern aflatoxin
 * 2021 both absent). No "Animal Food" product_type filter exists in the API.
 *
 * Output: recalls.json in the repo root, matching the Recall interface
 * (src/app/types.ts). Zero runtime dependencies (Node 18+ global fetch).
 */
import { writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const SOURCE_HTML = 'https://www.fda.gov/animal-veterinary/safety-health/recalls-withdrawals';
const AJAX_URL    = 'https://www.fda.gov/views/ajax';
const FDA_ORIGIN  = 'https://www.fda.gov';
const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36';
const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'recalls.json');

// CVM (Center for Veterinary Medicine) view configuration embedded in the
// animal-vet page's Drupal settings. The view_dom_id is a hash of the view's
// configuration and should be stable as long as the FDA doesn't restructure the view.
const CVM_VIEW_PARAMS = new URLSearchParams({
  view_name:       'recall_solr_index',
  view_display_id: 'cvm_recall_datatable_block_1',
  view_args:       '',
  view_path:       '/node/360198',
  view_base_path:  'safety/recalls-market-withdrawals-safety-alerts/datatables-data',
  view_dom_id:     'df190d81dfd5533599e67d8aae79e9a3c669fdcb6999b67928669044dfdbc94c',
  pager_element:   '0',
});

// Pathogen/toxin recalls → Class I (DANGER). Nutritional imbalances and
// foreign-material recalls → Class II (WARNING). Drives red/yellow card styling.
const CLASS_I = /salmonella|listeria|aflatoxin|botulism|e\.?\s?coli|toxin|pathogen|contaminat/i;

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
      source_url: href ? (href.startsWith('http') ? href : FDA_ORIGIN + href) : SOURCE_HTML,
    });
  }
  return out;
}

/** Primary: POST to the Drupal Views AJAX endpoint — not blocked by Akamai. */
async function fetchViaAjax() {
  console.log('[*] Attempting CVM AJAX endpoint (POST /views/ajax)…');
  const res = await fetch(AJAX_URL, {
    method: 'POST',
    headers: {
      'User-Agent': UA,
      'Content-Type': 'application/x-www-form-urlencoded',
      'X-Requested-With': 'XMLHttpRequest',
      'Accept': 'application/json, text/javascript, */*; q=0.01',
      'Referer': SOURCE_HTML,
    },
    body: CVM_VIEW_PARAMS.toString(),
  });
  if (!res.ok) throw new Error(`AJAX POST failed: HTTP ${res.status}`);

  const commands = await res.json();
  // The "insert" command carries the rendered table HTML
  const insertCmd = commands.find(c => c.command === 'insert' && c.data && c.data.includes('<tbody'));
  if (!insertCmd) throw new Error('AJAX response missing insert command with table HTML');

  const recalls = parseRows(insertCmd.data);
  if (recalls.length === 0) throw new Error('AJAX: parsed 0 recalls from table HTML');
  return recalls;
}

/** Fallback: direct GET of the animal-vet HTML page. Works from non-cloud IPs. */
async function fetchViaHtml() {
  console.log('[*] Attempting direct HTML scrape (fallback)…');
  const res = await fetch(SOURCE_HTML, {
    headers: {
      'User-Agent': UA,
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
      'Accept-Language': 'en-US,en;q=0.9',
    },
  });
  if (!res.ok) throw new Error(`HTML fetch failed: HTTP ${res.status}`);
  const html = await res.text();
  const recalls = parseRows(html);
  if (recalls.length === 0) throw new Error('HTML fallback: parsed 0 recalls — page markup may have changed');
  return recalls;
}

async function main() {
  console.log('[*] Fetching FDA animal-veterinary recalls…');

  let recalls;
  try {
    recalls = await fetchViaAjax();
    console.log('[+] AJAX source succeeded');
  } catch (ajaxErr) {
    console.warn(`[!] AJAX source failed: ${ajaxErr.message}`);
    console.log('[*] Trying HTML fallback…');
    recalls = await fetchViaHtml();
    console.log('[+] HTML fallback succeeded');
  }

  recalls.sort((a, b) => b.report_date.localeCompare(a.report_date));

  await writeFile(OUT, JSON.stringify(recalls, null, 2) + '\n', 'utf8');
  console.log(`[+] Wrote ${recalls.length} recalls to recalls.json`);
  for (const r of recalls.slice(0, 8)) {
    console.log(`    ${r.report_date} | ${r.classification} | ${r.recalling_firm.slice(0, 24).padEnd(24)} | ${r.product_description.slice(0, 50)}`);
  }
}

main().catch((e) => { console.error('[!]', e.message); process.exit(1); });
