import React, { useState, useEffect } from 'react';
import { searchCards } from '../api/scryfall';
import { Card } from '../types/scryfall';
import CardGrid from '../components/CardGrid';

export default function Collection() {
  const [cards, setCards] = useState<Card[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!search.trim()) return;
    
    setLoading(true);
    try {
      const results = await searchCards(search);
      setCards(results);
    } catch (error) {
      console.error('Error searching cards:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCardClick = (card: Card) => {
    // TODO: Implement collection management
    console.log('Card clicked:', card);
  };

  return (
    <div className="ml-64 bg-gray-900 min-h-screen text-white">
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-6">My Collection</h1>
        
        <div className="mb-6">
          <div className="flex space-x-4">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="Search cards..."
              className="flex-1 px-4 py-2 bg-gray-800 rounded-lg text-white"
            />
            <button
              onClick={handleSearch}
              className="px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-700"
              disabled={loading}
            >
              Search
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div>Loading cards...</div>
          </div>
        ) : (
          <CardGrid cards={cards} onCardClick={handleCardClick} />
        )}
      </div>
    </div>
  );
}