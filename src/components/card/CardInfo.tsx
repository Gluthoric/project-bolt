import React from 'react';
import { Card } from '../../types/scryfall';

export default function CardInfo({ card }: { card: Card }) {
  return (
    <div className="mt-2">
      <p className="text-sm text-white truncate">{card.name}</p>
      <p className="text-xs text-gray-400">
        ${card.prices.usd || '0.00'}
        {card.prices.usd_foil && ` / $${card.prices.usd_foil} (foil)`}
      </p>
    </div>
  );
}