#!/usr/bin/env python3
"""
fetch_recalls.py — Pull REAL pet/animal food recall data from the FDA OpenFDA API.

Replaces the old hardcoded recalls.json with verified, real-world FDA enforcement data.

Usage:
    python fetch_recalls.py

Output:
    recalls.json — Array of recall objects ready for the SafePaws frontend.

API Docs: https://open.fda.gov/apis/food/enforcement/

NOTE: The OpenFDA API disclaimer states this data should not be the sole basis
for consumer safety decisions. SafePaws uses it editorially alongside the
disclaimer already on the site.
"""

import json
import sys
from datetime import datetime, timedelta
from urllib.request import urlopen, Request
from urllib.error import HTTPError, URLError
from urllib.parse import quote

# ---------------------------------------------------------------------------
# CONFIG
# ---------------------------------------------------------------------------
OPENFDA_BASE = "https://api.fda.gov/food/enforcement.json"

# Search terms to capture pet/animal food recalls.
# The FDA food enforcement endpoint includes BOTH human and animal food.
# We filter by keywords commonly found in pet food product descriptions.
PET_KEYWORDS = [
    "dog",
    "cat",
    "pet",
    "puppy",
    "kitten",
    "canine",
    "feline",
    "animal feed",
    "animal food",
]

# How many results to request (max 100 per call)
LIMIT = 100

# How far back to search (in days). Wider window = more results.
LOOKBACK_DAYS = 730  # ~2 years

# Output file path
OUTPUT_FILE = "recalls.json"


# ---------------------------------------------------------------------------
# HELPERS
# ---------------------------------------------------------------------------
def build_search_query() -> str:
    """Build the OpenFDA search parameter to find pet food recalls."""
    # Combine keywords with OR: product_description:"dog" OR product_description:"cat" ...
    clauses = [f'product_description:"{kw}"' for kw in PET_KEYWORDS]
    keyword_filter = "+OR+".join(clauses)

    # Date range filter — only recent recalls
    end_date = datetime.now().strftime("%Y%m%d")
    start_date = (datetime.now() - timedelta(days=LOOKBACK_DAYS)).strftime("%Y%m%d")
    date_filter = f"report_date:[{start_date}+TO+{end_date}]"

    return f"({keyword_filter})+AND+{date_filter}"


def fetch_from_fda() -> list[dict]:
    """Call the OpenFDA API and return raw results."""
    search = build_search_query()
    url = f"{OPENFDA_BASE}?search={search}&sort=report_date:desc&limit={LIMIT}"

    print(f"[*] Fetching from OpenFDA...")
    print(f"    URL: {url[:120]}...")

    req = Request(url, headers={"User-Agent": "SafePawsMonitor/1.0"})

    try:
        with urlopen(req, timeout=30) as resp:
            data = json.loads(resp.read().decode())
    except HTTPError as e:
        if e.code == 404:
            print("[!] No results found for the current search query.")
            return []
        raise

    results = data.get("results", [])
    total = data.get("meta", {}).get("results", {}).get("total", 0)
    print(f"[+] Found {total} total matching recalls, retrieved {len(results)}")
    return results


def classify_severity(classification: str) -> str:
    """Map FDA classification to a user-friendly severity label."""
    mapping = {
        "Class I": "DANGER",
        "Class II": "WARNING",
        "Class III": "NOTICE",
    }
    return mapping.get(classification, "WARNING")


def extract_brand(product_desc: str, recalling_firm: str) -> str:
    """Best-effort brand extraction from product description or firm name."""
    # Often the first few words of the product description are the brand
    # Fall back to the recalling firm name
    if product_desc:
        # Take the first 3-4 words as a rough brand guess
        words = product_desc.split()
        if len(words) >= 2:
            return " ".join(words[:3]).rstrip(",").rstrip(":")
    return recalling_firm or "Unknown"


def determine_pet_type(product_desc: str) -> str:
    """Determine if the recall affects dogs, cats, or both."""
    desc_lower = product_desc.lower()
    is_dog = any(w in desc_lower for w in ["dog", "puppy", "canine"])
    is_cat = any(w in desc_lower for w in ["cat", "kitten", "feline"])

    if is_dog and is_cat:
        return "both"
    elif is_dog:
        return "dog"
    elif is_cat:
        return "cat"
    else:
        return "both"  # Generic pet/animal food


def transform_recall(raw: dict) -> dict:
    """Transform a raw OpenFDA result into the format SafePaws expects."""
    classification = raw.get("classification", "Class II")
    product_desc = raw.get("product_description", "")
    recalling_firm = raw.get("recalling_firm", "")

    # Parse the report date into a cleaner format
    report_date_raw = raw.get("report_date", "")
    try:
        dt = datetime.strptime(report_date_raw, "%Y%m%d")
        report_date = dt.strftime("%Y-%m-%d")
    except (ValueError, TypeError):
        report_date = report_date_raw

    return {
        "recall_number": raw.get("event_id", raw.get("recall_number", "N/A")),
        "reason_for_recall": raw.get("reason_for_recall", "").strip(),
        "status": raw.get("status", "Unknown"),
        "distribution_pattern": raw.get("distribution_pattern", ""),
        "product_description": product_desc.strip(),
        "report_date": report_date,
        "classification": classification,
        "severity": classify_severity(classification),
        "brand_name": extract_brand(product_desc, recalling_firm),
        "recalling_firm": recalling_firm.strip(),
        "pet_type": determine_pet_type(product_desc),
        "city": raw.get("city", ""),
        "state": raw.get("state", ""),
        "voluntary_mandated": raw.get("voluntary_mandated", ""),
        "recall_initiation_date": raw.get("recall_initiation_date", ""),
    }


# ---------------------------------------------------------------------------
# MAIN
# ---------------------------------------------------------------------------
def main():
    try:
        raw_results = fetch_from_fda()
    except (HTTPError, URLError) as e:
        print(f"[!] Failed to fetch from FDA API: {e}")
        sys.exit(1)

    if not raw_results:
        print("[!] No pet food recalls found. Keeping existing recalls.json.")
        sys.exit(0)

    recalls = [transform_recall(r) for r in raw_results]

    # Sort by date descending (most recent first)
    recalls.sort(key=lambda x: x.get("report_date", ""), reverse=True)

    # Write output
    with open(OUTPUT_FILE, "w", encoding="utf-8") as f:
        json.dump(recalls, f, indent=2, ensure_ascii=False)

    print(f"[+] Wrote {len(recalls)} recalls to {OUTPUT_FILE}")
    print(f"[+] Most recent: {recalls[0]['report_date']} — {recalls[0]['product_description'][:60]}")
    print(f"[+] Oldest:      {recalls[-1]['report_date']} — {recalls[-1]['product_description'][:60]}")


if __name__ == "__main__":
    main()
