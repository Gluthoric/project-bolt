import React from 'react';
import { Card } from '../../types/scryfall';

export default function CardImage({ card }: { card: Card }) {
  const imageUri = card.image_uris?.normal || card.card_faces?.[0].image_uris.normal;
  
  return (
    <div style={{ aspectRatio: '0.716' }}>
      <img
        src={imageUri}
        alt={card.name}
        className="rounded-lg w-full h-full object-cover"
        loading="lazy"
      />
    </div>
  );
}