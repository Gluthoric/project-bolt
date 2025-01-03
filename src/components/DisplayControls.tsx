import React from 'react';
import { ChevronDown } from 'lucide-react';

interface DisplayControlsProps {
  cardSize: number;
  cardsPerRow: number;
  onCardSizeChange: (size: number) => void;
  onCardsPerRowChange: (count: number) => void;
}

const cardSizes = [
  { value: 150, label: 'Small' },
  { value: 200, label: 'Medium' },
  { value: 250, label: 'Large' },
  { value: 300, label: 'Extra Large' }
];

const rowOptions = [2, 3, 4, 5, 6, 8];

export default function DisplayControls(props: DisplayControlsProps) {
  return (
    <div className="flex items-center gap-4 mb-4 px-4 text-gray-400">
      <div className="flex items-center gap-2">
        <label>Card size:</label>
        <div className="relative">
          <select
            value={props.cardSize}
            onChange={(e) => props.onCardSizeChange(Number(e.target.value))}
            className="bg-gray-800 text-white px-4 py-2 pr-8 rounded-lg appearance-none cursor-pointer min-w-[120px]"
          >
            {cardSizes.map(size => (
              <option key={size.value} value={size.value}>
                {size.label}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" size={16} />
        </div>
      </div>

      <div className="flex items-center gap-2">
        <label>Cards per row:</label>
        <div className="relative">
          <select
            value={props.cardsPerRow}
            onChange={(e) => props.onCardsPerRowChange(Number(e.target.value))}
            className="bg-gray-800 text-white px-4 py-2 pr-8 rounded-lg appearance-none cursor-pointer min-w-[80px]"
          >
            {rowOptions.map(count => (
              <option key={count} value={count}>
                {count}
              </option>
            ))}
          </select>
          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" size={16} />
        </div>
      </div>
    </div>
  );
}