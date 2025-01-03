import React from 'react';
import SearchInput from '../search/SearchInput';
import FilterControls from '../filters/FilterControls';
import SortingControls from '../filters/SortingControls';
import SubsetControls from '../filters/SubsetControls';
import { FilterState, SortOption } from '../../types/search';

interface SidePanelProps {
  onSearch: (query: string) => void;
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  sortOption: SortOption;
  onSortOptionChange: (option: SortOption) => void;
  onReset: () => void;
}

export default function SidePanel({
  onSearch,
  filters,
  onFiltersChange,
  sortOption,
  onSortOptionChange,
  onReset
}: SidePanelProps) {
  return (
    <aside className="w-64 bg-gray-800 p-4 h-[calc(100vh-4rem)] overflow-y-auto">
      <div className="space-y-6">
        <section>
          <h2 className="text-sm font-semibold text-gray-400 mb-2">Search</h2>
          <SearchInput onSearch={onSearch} />
        </section>

        <section>
          <h2 className="text-sm font-semibold text-gray-400 mb-2">Sort</h2>
          <SortingControls option={sortOption} onChange={onSortOptionChange} />
        </section>

        <section>
          <h2 className="text-sm font-semibold text-gray-400 mb-2">Filters</h2>
          <FilterControls filters={filters} onChange={onFiltersChange} />
        </section>

        <section>
          <h2 className="text-sm font-semibold text-gray-400 mb-2">Subset Options</h2>
          <SubsetControls />
        </section>

        <button
          onClick={onReset}
          className="w-full py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
        >
          Reset All Filters
        </button>
      </div>
    </aside>
  );
}