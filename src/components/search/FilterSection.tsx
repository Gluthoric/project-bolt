import React from 'react';
import { FilterState, PriceFilter, CollectionStatus } from '../../types/search';
import FilterDropdown from './FilterDropdown';

interface FilterSectionProps {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
}

export default function FilterSection({ filters, onChange }: FilterSectionProps) {
  const handleFilterChange = (key: keyof FilterState, value: any) => {
    onChange({ ...filters, [key]: value });
  };

  return (
    <div className="flex gap-4">
      <FilterDropdown
        label="Price"
        value={filters.priceFilter}
        options={[
          { value: 'market', label: 'Market' },
          { value: 'low', label: 'Low' },
          { value: 'average', label: 'Average' },
          { value: 'high', label: 'High' }
        ]}
        onChange={(value) => handleFilterChange('priceFilter', value)}
      />
      
      <FilterDropdown
        label="Collection"
        value={filters.collectionStatus}
        options={[
          { value: 'all', label: 'All' },
          { value: 'complete', label: 'Complete' },
          { value: 'partial', label: 'Partial' },
          { value: 'empty', label: 'Empty' }
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
          { value: 'masters', label: 'Masters' }
        ]}
        onChange={(value) => handleFilterChange('setType', value)}
      />
    </div>
  );
}