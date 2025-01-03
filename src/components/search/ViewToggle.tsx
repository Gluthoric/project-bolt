import React from 'react';
import { Grid, List } from 'lucide-react';
import { ViewMode } from '../../types/search';

interface ViewToggleProps {
  mode: ViewMode;
  onChange: (mode: ViewMode) => void;
}

export default function ViewToggle({ mode, onChange }: ViewToggleProps) {
  return (
    <div className="flex bg-gray-700 rounded-lg p-1">
      <button
        onClick={() => onChange('grid')}
        className={`p-2 rounded ${
          mode === 'grid' ? 'bg-gray-600 text-white' : 'text-gray-400'
        }`}
        aria-label="Grid view"
      >
        <Grid size={20} />
      </button>
      <button
        onClick={() => onChange('list')}
        className={`p-2 rounded ${
          mode === 'list' ? 'bg-gray-600 text-white' : 'text-gray-400'
        }`}
        aria-label="List view"
      >
        <List size={20} />
      </button>
    </div>
  );
}