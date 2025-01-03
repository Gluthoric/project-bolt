import React from 'react';
import { Card } from '../../types/scryfall';
import CardImage from './CardImage';
import CardInfo from './CardInfo';

interface CardGridItemProps {
  card: Card;
  onClick: () => void;
}

export default function CardGridItem({ card, onClick }: CardGridItemProps) {
  return (
    <div
      className="cursor-pointer hover:scale-105 transition-transform"
      onClick={onClick}
    >
      <CardImage card={card} />
      <CardInfo card={card} />
    </div>
  );
}