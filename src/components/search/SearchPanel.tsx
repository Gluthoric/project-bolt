import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import SearchInput from './SearchInput';
import ViewToggle from './ViewToggle';
import FilterSection from './FilterSection';
import SortControls from './SortControls';
import { ViewMode, SortOption, FilterState } from '../../types/search';

interface SearchPanelProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  sortOption: SortOption;
  onSortOptionChange: (option: SortOption) => void;
  filters: FilterState;
  onFiltersChange: (filters: FilterState) => void;
  onSearch: (query: string) => void;
}

export default function SearchPanel(props: SearchPanelProps) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg mb-6 space-y-4">
      <div className="flex items-center gap-4">
        <div className="flex-1">
          <SearchInput onSearch={props.onSearch} />
        </div>
        <ViewToggle mode={props.viewMode} onChange={props.onViewModeChange} />
      </div>
      
      <div className="flex items-center gap-4">
        <SortControls 
          option={props.sortOption}
          onChange={props.onSortOptionChange}
        />
        <FilterSection
          filters={props.filters}
          onChange={props.onFiltersChange}
        />
      </div>
    </div>
  );
}