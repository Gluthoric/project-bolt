import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchCards } from '../api/scryfall';
import { Card } from '../types/scryfall';
import CardGrid from '../components/CardGrid';
import SetHeader from '../components/SetHeader';
import Pagination from '../components/Pagination';
import DisplayControls from '../components/DisplayControls';

const CARDS_PER_PAGE = 24;

export default function SetDetails() {
  const { setCode } = useParams();
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [cardSize, setCardSize] = useState(200);
  const [cardsPerRow, setCardsPerRow] = useState(6);

  useEffect(() => {
    const loadCards = async () => {
      if (!setCode) return;
      
      setLoading(true);
      try {
        const data = await fetchCards(setCode);
        setCards(data);
      } catch (error) {
        console.error('Error loading cards:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCards();
  }, [setCode]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-white">Loading cards...</div>
      </div>
    );
  }

  const totalPages = Math.ceil(cards.length / CARDS_PER_PAGE);
  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const visibleCards = cards.slice(startIndex, startIndex + CARDS_PER_PAGE);

  return (
    <div className="ml-64 bg-gray-900 min-h-screen">
      <div className="p-6">
        <SetHeader 
          setCode={setCode} 
          cardCount={cards.length} 
          showing={`${startIndex + 1}-${Math.min(startIndex + CARDS_PER_PAGE, cards.length)}`}
        />

        <DisplayControls
          cardSize={cardSize}
          cardsPerRow={cardsPerRow}
          onCardSizeChange={setCardSize}
          onCardsPerRowChange={setCardsPerRow}
        />
        
        <CardGrid 
          cards={visibleCards} 
          onCardClick={() => {}}
          cardSize={cardSize}
          cardsPerRow={cardsPerRow}
        />
        
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}