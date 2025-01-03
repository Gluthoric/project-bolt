import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Set } from '../types/scryfall';

interface SetFilterProps {
  sets: Set[];
  selectedSet: string | null;
  onSetChange: (setCode: string) => void;
}

export default function SetFilter({ sets, selectedSet, onSetChange }: SetFilterProps) {
  return (
    <div className="relative">
      <select
        value={selectedSet || ''}
        onChange={(e) => onSetChange(e.target.value)}
        className="w-full bg-gray-800 text-white px-4 py-2 pr-8 rounded-lg appearance-none cursor-pointer"
      >
        <option value="">Select a Set</option>
        {sets.map((set) => (
          <option key={set.code} value={set.code}>
            {set.name} ({set.code.toUpperCase()})
          </option>
        ))}
      </select>
      <ChevronDown 
        size={20} 
        className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" 
      />
    </div>
  );
}