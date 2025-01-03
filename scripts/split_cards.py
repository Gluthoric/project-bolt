#!/usr/bin/env python3
import json
import os
from pathlib import Path
from collections import defaultdict

def split_cards():
    print("Reading default-cards.json...")
    script_dir = Path(__file__).parent
    cards_file = script_dir.parent / "data" / "default-cards.json"
    cards_dir = script_dir.parent / "data" / "cards"

    # Create cards directory if it doesn't exist
    cards_dir.mkdir(exist_ok=True)

    # Read all cards
    with open(cards_file, 'r') as f:
        cards = json.load(f)

    # Group cards by set
    sets = defaultdict(list)
    for card in cards:
        sets[card['set']].append(card)

    print(f"Found {len(sets)} sets")

    # Create search index
    search_index = {}
    print("Creating search index...")
    for card in cards:
        # Create searchable text from card fields
        text = ' '.join(filter(None, [
            card.get('name', ''),
            card.get('set', ''),
            card.get('type_line', ''),
            card.get('oracle_text', '')
        ])).lower()

        # Add card to search index for each word
        for word in text.split():
            if word not in search_index:
                search_index[word] = []
            if len(search_index[word]) < 100:  # Limit results per word
                search_index[word].append(card)

    # Save search index
    with open(cards_dir.parent / "search-index.json", 'w') as f:
        json.dump(search_index, f)
    print("Saved search index")

    # Save individual set files
    for set_code, set_cards in sets.items():
        with open(cards_dir / f"{set_code}.json", 'w') as f:
            json.dump(set_cards, f)
        print(f"Saved {len(set_cards)} cards for set {set_code}")

if __name__ == "__main__":
    split_cards()
