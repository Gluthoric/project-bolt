import React from 'react';
import { ArrowUpDown } from 'lucide-react';
import { SortOption } from '../../types/search';

interface SortControlsProps {
  option: SortOption;
  onChange: (option: SortOption) => void;
}

export default function SortControls({ option, onChange }: SortControlsProps) {
  return (
    <div className="flex items-center gap-2">
      <select
        value={option.field}
        onChange={(e) => onChange({ ...option, field: e.target.value })}
        className="bg-gray-700 text-white px-3 py-2 rounded-lg"
      >
        <option value="name">Name</option>
        <option value="price">Price</option>
        <option value="rarity">Rarity</option>
        <option value="collected">Collection Date</option>
      </select>
      
      <button
        onClick={() => onChange({ ...option, direction: option.direction === 'asc' ? 'desc' : 'asc' })}
        className="p-2 bg-gray-700 rounded-lg text-gray-400 hover:text-white"
        aria-label={`Sort ${option.direction === 'asc' ? 'descending' : 'ascending'}`}
      >
        <ArrowUpDown size={20} />
      </button>
    </div>
  );
}