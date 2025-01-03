import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface SetHeaderProps {
  setCode?: string;
  cardCount: number;
  showing: string;
}

export default function SetHeader({ setCode, cardCount, showing }: SetHeaderProps) {
  return (
    <div className="mb-6">
      <div className="flex items-center space-x-2 text-gray-400 mb-2">
        <Link to="/browse" className="hover:text-white">Browse</Link>
        <ChevronRight size={16} />
        <span className="text-white">{setCode?.toUpperCase()}</span>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Set Details</h1>
        <p className="text-gray-400">
          Showing {showing} of {cardCount} cards
        </p>
      </div>
    </div>
  );
}