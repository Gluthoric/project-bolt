import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Browse from './pages/Browse';
import Collection from './pages/Collection';
import Scanner from './pages/Scanner';
import SetDetails from './pages/SetDetails';
import { FilterState, SortOption } from './types/search';

function App() {
  const [filters, setFilters] = useState<FilterState>({
    priceFilter: 'market',
    collectionStatus: 'all',
    setType: 'all'
  });
  const [sortOption, setSortOption] = useState<SortOption>({
    field: 'name',
    direction: 'asc'
  });
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleReset = () => {
    setFilters({
      priceFilter: 'market',
      collectionStatus: 'all',
      setType: 'all'
    });
    setSortOption({
      field: 'name',
      direction: 'asc'
    });
    setSearchQuery('');
  };

  return (
    <Router>
      <div className="flex">
        <Sidebar
          onSearch={handleSearch}
          filters={filters}
          onFiltersChange={setFilters}
          sortOption={sortOption}
          onSortOptionChange={setSortOption}
          onReset={handleReset}
        />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Browse />} />
            <Route path="/browse" element={<Browse />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/scanner" element={<Scanner />} />
            <Route path="/sets/:setCode" element={<SetDetails />} />
            <Route path="*" element={<Browse />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
