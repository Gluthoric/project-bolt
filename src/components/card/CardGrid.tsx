import React from 'react';
import { Card } from '../../types/scryfall';
import CardGridItem from './CardGridItem';
import useGridLayout from '../../hooks/useGridLayout';

interface CardGridProps {
  cards: Card[];
  onCardClick: (card: Card) => void;
  cardSize: number;
  cardsPerRow: number;
}

export default function CardGrid({ cards, onCardClick, cardSize, cardsPerRow }: CardGridProps) {
  const { gridWidth, gridStyle } = useGridLayout(cardSize, cardsPerRow);
  
  return (
    <div className="flex justify-center">
      <div style={{ ...gridStyle, width: `${gridWidth}px`, maxWidth: '100%' }}>
        {cards.map((card) => (
          <CardGridItem
            key={card.id}
            card={card}
            onClick={() => onCardClick(card)}
          />
        ))}
      </div>
    </div>
  );
}