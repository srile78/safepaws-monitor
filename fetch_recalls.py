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
    },
    {
        "recall_number": "R-127-2025",
        "reason_for_recall": "Undeclared allergens (Peanut)",
        "status": "Ongoing",
        "distribution_pattern": "TX, AZ, NM",
        "product_description": "Kibble King Peanut Butter Treats",
        "report_date": "2025-12-06",
        "classification": "Class II",
        "brand_name": "Kibble King"
    },
    {
        "recall_number": "R-128-2025",
        "reason_for_recall": "Foreign object (Plastic)",
        "status": "Ongoing",
        "distribution_pattern": "Nationwide",
        "product_description": "Happy Hounds Dental Chews",
        "report_date": "2025-12-07",
        "classification": "Class I",
        "brand_name": "Happy Hounds"
    },
    {
        "recall_number": "R-129-2025",
        "reason_for_recall": "High moisture content leading to mold",
        "status": "Terminated",
        "distribution_pattern": "FL, GA, AL",
        "product_description": "Sunny Days Catnip Crunch",
        "report_date": "2025-11-20",
        "classification": "Class II",
        "brand_name": "Sunny Days"
    },
    {
        "recall_number": "R-130-2025",
        "reason_for_recall": "Aflatoxin levels above limit",
        "status": "Ongoing",
        "distribution_pattern": "Midwest",
        "product_description": "Corn & Grain Mix for Small Pets",
        "report_date": "2025-12-02",
        "classification": "Class I",
        "brand_name": "Farm Fresh"
    },
    {
        "recall_number": "R-131-2025",
        "reason_for_recall": "Potential E. coli contamination",
        "status": "Ongoing",
        "distribution_pattern": "Nationwide",
        "product_description": "Raw Diet Beef Patties",
        "report_date": "2025-12-08",
        "classification": "Class I",
        "brand_name": "Raw Paws"
    },
    {
        "recall_number": "R-132-2025",
        "reason_for_recall": "Incorrect labeling (Gluten-free claim)",
        "status": "Terminated",
        "distribution_pattern": "CA",
        "product_description": "Gourmet Gold Pate",
        "report_date": "2025-10-30",
        "classification": "Class III",
        "brand_name": "Gourmet Gold"
    },
    {
        "recall_number": "R-133-2025",
        "reason_for_recall": "Vitamin B deficiency",
        "status": "Ongoing",
        "distribution_pattern": "Nationwide",
        "product_description": "Vitality Plus Senior Formula",
        "report_date": "2025-11-15",
        "classification": "Class I",
        "brand_name": "Vitality Plus"
    },
    {
        "recall_number": "R-134-2025",
        "reason_for_recall": "Thiamine deficiency",
        "status": "Ongoing",
        "distribution_pattern": "East Coast",
        "product_description": "Ocean Catch Tuna Feast",
        "report_date": "2025-11-10",
        "classification": "Class II",
        "brand_name": "Ocean Catch"
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
