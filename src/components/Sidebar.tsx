import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Grid, Camera, ClipboardList, Target } from 'lucide-react';
import SearchInput from './search/SearchInput';
import FilterControls from './filters/FilterControls';
import SortingControls from './filters/SortingControls';
import SubsetControls from './filters/SubsetControls';
import { FilterState, SortOption } from '../types/search';

interface SidebarProps {
  onSearch: (query: string) => void;
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  sortOption: SortOption;
  onSortOptionChange: (option: SortOption) => void;
  onReset: () => void;
}

export default function Sidebar({
  onSearch,
  filters,
  onFiltersChange,
  sortOption,
  onSortOptionChange,
  onReset
}: SidebarProps) {
  return (
    <div className="w-64 bg-gray-900 text-white h-screen fixed left-0 top-0 overflow-hidden">
      <div className="h-full overflow-y-auto p-4">
        <NavLink to="/" className="flex items-center space-x-2 mb-8">
          <Home size={24} />
          <span>Home</span>
        </NavLink>

        <nav className="space-y-4">
          <NavLink to="/browse" className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded">
            <Grid size={20} />
            <span>Browse</span>
          </NavLink>

          <NavLink to="/collection" className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded">
            <ClipboardList size={20} />
            <span>Collection</span>
          </NavLink>

          <NavLink to="/scanner" className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded">
            <Camera size={20} />
            <span>Scanner</span>
          </NavLink>

          <NavLink to="/goals" className="flex items-center space-x-2 p-2 hover:bg-gray-800 rounded">
            <Target size={20} />
            <span>Goals (In Development)</span>
          </NavLink>

          <div className="border-t border-gray-700 my-4"></div>

          <div className="space-y-4 px-2">
            <section className="space-y-2">
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Search</h2>
              <SearchInput onSearch={onSearch} />
            </section>

            <section className="space-y-2">
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Sort</h2>
              <SortingControls option={sortOption} onChange={onSortOptionChange} />
            </section>

            <section className="space-y-2">
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Filters</h2>
              <FilterControls filters={filters} onChange={onFiltersChange} />
            </section>

            <section className="space-y-2">
              <h2 className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Subset Options</h2>
              <SubsetControls />
            </section>

            <button
              onClick={onReset}
              className="w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-sm text-white rounded-lg transition-colors mt-6"
            >
              Reset All Filters
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
}
