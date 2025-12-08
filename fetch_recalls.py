# fetch_recalls.py
import json
import os
from datetime import datetime

# Mock data to simulate API response
mock_recalls = [
    {
        "recall_number": "R-123-2025",
        "reason_for_recall": "Potential Salmonella contamination",
        "status": "Ongoing",
        "distribution_pattern": "Nationwide",
        "product_description": "Barky Bites Chicken Jerky 5oz",
        "report_date": "2025-12-01",
        "classification": "Class I",
        "brand_name": "Barky Bites"
    },
    {
        "recall_number": "R-124-2025",
        "reason_for_recall": "Elevated levels of Vitamin D",
        "status": "Ongoing",
        "distribution_pattern": "NY, NJ, PA",
        "product_description": "Meow Mix select dry food",
        "report_date": "2025-11-28",
        "classification": "Class II",
        "brand_name": "Meow Mix"
    },
    {
        "recall_number": "R-125-2025",
        "reason_for_recall": "Trace amounts of packaging material",
        "status": "Terminated",
        "distribution_pattern": "CA, OR, WA",
        "product_description": "Puppy Chow Beef Flavor",
        "report_date": "2025-10-15",
        "classification": "Class II",
        "brand_name": "Puppy Chow"
    },
    {
        "recall_number": "R-126-2025",
        "reason_for_recall": "Listeria monocytogenes contamination",
        "status": "Ongoing",
        "distribution_pattern": "Nationwide",
        "product_description": "FreshPet Select Slice & Serve",
        "report_date": "2025-12-05",
        "classification": "Class I",
        "brand_name": "FreshPet"
    }
]

def fetch_and_save():
    # In the future, this will fetch from the FDA API
    # data = requests.get(API_URL).json()
    data = mock_recalls
    
    # Add a timestamp metadata if we were wrapping this, but keeping it simple list for now
    # or we can wrap it. Let's stick to simple list for current frontend compatibility,
    # or let's wrap it to show metadata about last update?
    # The current frontend expects an array. Let's keep it an array for now
    # and maybe add a separate metadata file or field later if needed.
    
    # Save to JSON file
    file_path = os.path.join(os.path.dirname(__file__), 'recalls.json')
    
    with open(file_path, 'w') as f:
        json.dump(data, f, indent=2)
        
    print(f"Successfully updated {file_path} with {len(data)} recalls at {datetime.now()}")

if __name__ == "__main__":
    fetch_and_save()
