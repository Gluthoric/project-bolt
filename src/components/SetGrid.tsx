import React from 'react';
import { Link } from 'react-router-dom';
import { Set } from '../types/scryfall';

interface SetGridProps {
  sets: Set[];
}

export default function SetGrid({ sets }: SetGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {sets.map((set) => (
        <Link
          key={set.id}
          to={`/sets/${set.code}`}
          className="bg-gray-800 rounded-lg p-4 hover:bg-gray-700 transition-colors"
        >
          <div className="flex items-center space-x-4">
            <img
              src={set.icon_svg_uri}
              alt={set.name}
              className="w-12 h-12"
            />
            <div>
              <h3 className="text-lg font-semibold text-white">{set.name}</h3>
              <p className="text-gray-400">{set.card_count} cards</p>
              <p className="text-gray-400">{new Date(set.released_at).toLocaleDateString()}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}