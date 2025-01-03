#!/usr/bin/env python3
import json
import urllib.request
import sys
from pathlib import Path

def fetch_sets():
    print("Fetching sets from Scryfall...")
    url = "https://api.scryfall.com/sets"

    try:
        with urllib.request.urlopen(url) as response:
            data = json.loads(response.read())
            return data["data"]
    except Exception as e:
        print(f"Error fetching sets: {e}")
        sys.exit(1)

def update_sets():
    # Get path to sets.json relative to script location
    script_dir = Path(__file__).parent
    sets_file = script_dir.parent / "data" / "sets.json"

    # Read existing sets if any
    existing_sets = []
    if sets_file.exists():
        try:
            with open(sets_file, 'r') as f:
                existing_sets = json.load(f)
            print(f"Found {len(existing_sets)} existing sets")
        except Exception as e:
            print(f"Error reading existing sets: {e}")

    # Fetch new sets
    new_sets = fetch_sets()
    print(f"Fetched {len(new_sets)} sets from Scryfall")

    # Create lookup of existing sets by code
    existing_by_code = {s["code"]: s for s in existing_sets}

    # Merge sets, keeping existing ones and adding new ones
    final_sets = []
    for new_set in new_sets:
        if new_set["code"] in existing_by_code:
            final_sets.append(existing_by_code[new_set["code"]])
        else:
            final_sets.append(new_set)

    # Sort by release date (newest first)
    final_sets.sort(
        key=lambda x: x.get("released_at", "0000-00-00"),
        reverse=True
    )

    # Write back to file
    with open(sets_file, 'w') as f:
        json.dump(final_sets, f, indent=2)

    print(f"Successfully updated sets.json with {len(final_sets)} sets")
    print(f"Added {len(final_sets) - len(existing_sets)} new sets")

if __name__ == "__main__":
    update_sets()
