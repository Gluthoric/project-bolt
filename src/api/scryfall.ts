import { Set, Card } from '../types/scryfall';
import { fetchSets as localFetchSets, fetchCards as localFetchCards, searchCards as localSearchCards } from './localScryfall';

// Re-export the local implementations
export const fetchSets = localFetchSets;
export const fetchCards = localFetchCards;
export const searchCards = localSearchCards;
