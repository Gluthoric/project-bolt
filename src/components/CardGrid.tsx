import React from 'react';
import { Card } from '../types/scryfall';
import CardImage from './card/CardImage';
import CardInfo from './card/CardInfo';

interface CardGridProps {
  cards: Card[];
  onCardClick: (card: Card) => void;
  cardSize: number;
  cardsPerRow: number;
}

export default function CardGrid({ cards, onCardClick, cardSize, cardsPerRow }: CardGridProps) {
  const gridWidth = Math.min(
    cardSize * cardsPerRow + (16 * (cardsPerRow - 1)),
    window.innerWidth - 300 // Account for sidebar and padding
  );
  
  return (
    <div className="flex justify-center">
      <div 
        style={{ 
          display: 'grid',
          gridTemplateColumns: `repeat(${cardsPerRow}, ${cardSize}px)`,
          gap: '1rem',
          width: `${gridWidth}px`,
          maxWidth: '100%'
        }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            className="cursor-pointer hover:scale-105 transition-transform"
            onClick={() => onCardClick(card)}
          >
            <CardImage card={card} />
            <CardInfo card={card} />
          </div>
        ))}
      </div>
    </div>
  );
}