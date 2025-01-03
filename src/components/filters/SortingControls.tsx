import React from 'react';
import { ArrowUpDown } from 'lucide-react';
import { SortOption } from '../../types/search';

interface SortingControlsProps {
  option: SortOption;
  onChange: (option: SortOption) => void;
}

export default function SortingControls({ option, onChange }: SortingControlsProps) {
  return (
    <div className="flex flex-col space-y-2">
      <select
        value={option.field}
        onChange={(e) => onChange({ ...option, field: e.target.value })}
        className="w-full bg-gray-700 text-white px-3 py-2 rounded-lg"
      >
        <option value="name">Name</option>
        <option value="releaseDate">Release Date</option>
        <option value="price">Price</option>
        <option value="collectorNumber">Collector Number</option>
      </select>
      
      <button
        onClick={() => onChange({ 
          ...option, 
          direction: option.direction === 'asc' ? 'desc' : 'asc' 
        })}
        className="flex items-center justify-center w-full gap-2 p-2 bg-gray-700 rounded-lg text-gray-400 hover:text-white"
      >
        <ArrowUpDown size={16} />
        <span>{option.direction === 'asc' ? 'Ascending' : 'Descending'}</span>
      </button>
    </div>
  );
}