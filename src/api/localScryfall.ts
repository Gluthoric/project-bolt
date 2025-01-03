import { Set, Card } from '../types/scryfall';
import defaultCards from '../../data/default-cards.json';

// Cache the cards after first load for better performance
let cardsCache: Card[] | null = null;

async function loadCards(): Promise<Card[]> {
  if (cardsCache) {
    return cardsCache;
  }
  cardsCache = defaultCards as Card[];
  return cardsCache;
}

// Extract unique sets from cards
async function extractSets(): Promise<Set[]> {
  const cards = await loadCards();
  const setMap = new Map<string, Set>();

  cards.forEach(card => {
    if (!setMap.has(card.set)) {
      setMap.set(card.set, {
        id: card.set,
        code: card.set,
        name: card.set_name || card.set,
        released_at: '', // This info isn't in default-cards.json
        set_type: '', // This info isn't in default-cards.json
        card_count: 0,
        icon_svg_uri: '' // This info isn't in default-cards.json
      });
    }
    const setData = setMap.get(card.set)!;
    setData.card_count++;
  });

  return Array.from(setMap.values());
}

export async function fetchSets(): Promise<Set[]> {
  return extractSets();
}

export async function fetchCards(setCode: string): Promise<Card[]> {
  const cards = await loadCards();
  return cards.filter(card => card.set === setCode);
}

export async function searchCards(query: string): Promise<Card[]> {
  const cards = await loadCards();
  const lowercaseQuery = query.toLowerCase();

  return cards.filter(card => {
    // Basic search implementation - can be expanded based on needs
    return (
      card.name.toLowerCase().includes(lowercaseQuery) ||
      card.set.toLowerCase().includes(lowercaseQuery) ||
      card.type_line?.toLowerCase().includes(lowercaseQuery) ||
      card.oracle_text?.toLowerCase().includes(lowercaseQuery)
    );
  });
}
