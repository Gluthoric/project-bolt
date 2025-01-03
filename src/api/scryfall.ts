import { ScryfallResponse, Set, Card } from '../types/scryfall';

const BASE_URL = 'https://api.scryfall.com';

export async function fetchSets(): Promise<Set[]> {
  const response = await fetch(`${BASE_URL}/sets`);
  const data: ScryfallResponse<Set> = await response.json();
  return data.data;
}

export async function fetchCards(setCode: string): Promise<Card[]> {
  const response = await fetch(`${BASE_URL}/cards/search?q=set:${setCode}&order=set`);
  const data: ScryfallResponse<Card> = await response.json();
  return data.data;
}

export async function searchCards(query: string): Promise<Card[]> {
  const response = await fetch(`${BASE_URL}/cards/search?q=${encodeURIComponent(query)}`);
  const data: ScryfallResponse<Card> = await response.json();
  return data.data;
}