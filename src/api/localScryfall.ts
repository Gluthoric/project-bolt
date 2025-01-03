import { Set, Card } from '../types/scryfall';
import sets from '../../data/sets.json';

// Cache structure
interface CardCache {
  [setCode: string]: Card[];
}

interface SearchCache {
  [query: string]: Card[];
}

// Separate caches for different operations
const setCache: Set[] | null = null;
const cardCache: CardCache = {};
const searchCache: SearchCache = {};

// Load sets only when needed
async function loadSets(): Promise<Set[]> {
  if (setCache) {
    return setCache;
  }
  return sets as Set[];
}

// Load cards for a specific set
async function loadCardsForSet(setCode: string): Promise<Card[]> {
  if (cardCache[setCode]) {
    return cardCache[setCode];
  }

  try {
    const response = await fetch(`/data/cards/${setCode}.json`);
    const cards = await response.json();
    cardCache[setCode] = cards;
    return cards;
  } catch (error) {
    // Fallback to loading from default-cards if set file doesn't exist
    const module = await import('../../data/default-cards.json');
    const allCards = module.default as Card[];
    const setCards = allCards.filter(card => card.set === setCode);
    cardCache[setCode] = setCards;
    return setCards;
  }
}

export async function fetchSets(): Promise<Set[]> {
  return loadSets();
}

export async function fetchCards(setCode: string): Promise<Card[]> {
  return loadCardsForSet(setCode);
}

export async function searchCards(query: string): Promise<Card[]> {
  const cacheKey = query.toLowerCase();

  // Return cached search results if available
  if (searchCache[cacheKey]) {
    return searchCache[cacheKey];
  }

  try {
    // Try to use search index if available
    const response = await fetch(`/data/search-index.json`);
    const searchIndex = await response.json();
    const results = searchIndex[cacheKey] || [];
    searchCache[cacheKey] = results;
    return results;
  } catch (error) {
    // Fallback to loading and searching all cards
    const module = await import('../../data/default-cards.json');
    const allCards = module.default as Card[];

    const results = allCards.filter(card => {
      const cardText = [
        card.name,
        card.set,
        card.type_line,
        card.oracle_text
      ].filter(Boolean).join(' ').toLowerCase();

      return cardText.includes(cacheKey);
    });

    searchCache[cacheKey] = results;
    return results;
  }
}
