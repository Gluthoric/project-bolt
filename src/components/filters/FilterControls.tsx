import React from 'react';
import FilterDropdown from './FilterDropdown';
import { FilterState } from '../../types/search';

interface FilterControlsProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
}

export default function FilterControls({ filters, onChange }: FilterControlsProps) {
  const handleFilterChange = (key: keyof FilterState, value: string) => {
    onChange({ ...filters, [key]: value });
  };

  return (
    <div className="space-y-4">
      <FilterDropdown
        label="Price"
        value={filters.priceFilter}
        options={[
          { value: 'market', label: 'Market Price' },
          { value: 'low', label: 'Low Price' },
          { value: 'average', label: 'Average Price' },
          { value: 'high', label: 'High Price' }
        ]}
        onChange={(value) => handleFilterChange('priceFilter', value)}
      />

      <FilterDropdown
        label="Collection Status"
        value={filters.collectionStatus}
        options={[
          { value: 'all', label: 'All Cards' },
          { value: 'complete', label: 'Complete' },
          { value: 'partial', label: 'Partial' },
          { value: 'empty', label: 'Not Collected' }
        ]}
        onChange={(value) => handleFilterChange('collectionStatus', value)}
      />

      <FilterDropdown
        label="Set Type"
        value={filters.setType}
        options={[
          { value: 'all', label: 'All Sets' },
          { value: 'expansion', label: 'Expansions' },
          { value: 'core', label: 'Core Sets' },
          { value: 'masters', label: 'Masters Sets' },
          { value: 'draft_innovation', label: 'Draft Innovation' }
        ]}
        onChange={(value) => handleFilterChange('setType', value)}
      />
    </div>
  );
}