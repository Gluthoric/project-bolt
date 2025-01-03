import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchSets } from '../api/scryfall';
import { Set } from '../types/scryfall';
import SetGrid from '../components/SetGrid';
import SetFilter from '../components/SetFilter';
import Pagination from '../components/Pagination';

const ITEMS_PER_PAGE = 20;

export default function Browse() {
  const navigate = useNavigate();
  const [sets, setSets] = useState<Set[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedSet, setSelectedSet] = useState<string | null>(null);

  useEffect(() => {
    const loadSets = async () => {
      try {
        const data = await fetchSets();
        setSets(data);
      } catch (error) {
        console.error('Error loading sets:', error);
      } finally {
        setLoading(false);
      }
    };

    loadSets();
  }, []);

  const handleSetChange = (setCode: string) => {
    setSelectedSet(setCode);
    if (setCode) {
      navigate(`/sets/${setCode}`);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-white">Loading sets...</div>
      </div>
    );
  }

  const totalPages = Math.ceil(sets.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const visibleSets = sets.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-white">Browse Sets</h1>
          <div className="w-64">
            <SetFilter
              sets={sets}
              selectedSet={selectedSet}
              onSetChange={handleSetChange}
            />
          </div>
        </div>

        <div className="mb-4 text-gray-400">
          Showing {startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, sets.length)} of {sets.length} sets
        </div>

        <SetGrid sets={visibleSets} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
