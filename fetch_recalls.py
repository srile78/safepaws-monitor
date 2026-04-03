import json, re, subprocess, sys
from datetime import datetime, timedelta

OUTPUT_FILE = "recalls.json"

def fetch():
    print("[*] Fetching via PowerShell...")
    url = "https://api.fda.gov/food/enforcement.json?search=(product_description:%22dog%20food%22+OR+product_description:%22cat%20food%22+OR+product_description:%22pet%20food%22+OR+product_description:%22dog%20treat%22+OR+product_description:%22cat%20treat%22+OR+product_description:%22pet%20treat%22+OR+product_description:%22puppy%22+OR+product_description:%22kitten%22+OR+product_description:%22canine%22+OR+product_description:%22feline%22)&sort=report_date:desc&limit=100"
    cmd = f'(Invoke-WebRequest -Uri "{url}" -UseBasicParsing).Content'
    r = subprocess.run(["powershell","-Command",cmd], capture_output=True, text=True, timeout=60)
    if r.returncode != 0:
        print(f"[!] PowerShell error: {r.stderr[:200]}"); return []
    data = json.loads(r.stdout)
    results = data.get("results", [])
    total = data.get("meta",{}).get("results",{}).get("total","?")
    print(f"[+] Got {len(results)} of {total} results")
    return results

EXCL = [r'hot\s+dog',r'hush\s+pupp',r'corn\s+dog',r'Fl\.?\s*oz\.?\s*,?\s*PET',r'\d+\s*oz\.?\s*PET',r'PET,\s*\d+',r'packaged\s+in\s+PET']
PET = [r'\bdog\s+food\b',r'\bcat\s+food\b',r'\bpet\s+food\b',r'\bdog\s+treat\b',r'\bcat\s+treat\b',r'\bpet\s+treat\b',r'\bpuppy\b',r'\bkitten\b',r'\bcanine\b',r'\bfeline\b',r'\bfor\s+dogs\b',r'\bfor\s+cats\b',r'refrigerated\s+dog',r'refrigerated\s+cat']

def ok(d):
    lo = d.lower()
    if any(re.search(p,d) or re.search(p,lo) for p in EXCL): return False
    return any(re.search(p,lo) for p in PET)

def main():
    results = fetch()
    if not results: print("[!] No results."); return
    kept = []
    for raw in results:
        desc = raw.get("product_description","").strip()
        if not ok(desc):
            print(f"  SKIP: {desc[:60]}"); continue
        rd = raw.get("report_date","")
        try: rd = datetime.strptime(rd,"%Y%m%d").strftime("%Y-%m-%d")
        except: pass
        cl = raw.get("classification","Class II")
        kept.append({"recall_number":raw.get("event_id","N/A"),"reason_for_recall":raw.get("reason_for_recall","").strip(),"status":raw.get("status","Unknown"),"distribution_pattern":raw.get("distribution_pattern",""),"product_description":desc,"report_date":rd,"classification":cl,"severity":{"Class I":"DANGER","Class II":"WARNING","Class III":"NOTICE"}.get(cl,"WARNING"),"brand_name":" ".join(desc.split()[:3]).rstrip(",:"),"recalling_firm":raw.get("recalling_firm","").strip(),"pet_type":"both","city":raw.get("city",""),"state":raw.get("state",""),"voluntary_mandated":raw.get("voluntary_mandated",""),"recall_initiation_date":raw.get("recall_initiation_date","")})
    kept.sort(key=lambda x: x.get("report_date",""), reverse=True)
    if not kept: print("[!] No pet food recalls after filtering."); return
    with open(OUTPUT_FILE,"w",encoding="utf-8") as f:
        json.dump(kept, f, indent=2, ensure_ascii=False)
    print(f"\n[+] Wrote {len(kept)} pet food recalls to {OUTPUT_FILE}")
    for r in kept[:8]:
        print(f"    {r['report_date']} | {r['recalling_firm'][:25]:25} | {r['product_description'][:45]}")

main()
