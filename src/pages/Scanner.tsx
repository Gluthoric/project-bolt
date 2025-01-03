import React, { useState } from 'react';
import { Camera } from 'lucide-react';
import { scanCard } from '../api/scanner';
import { ScanResult } from '../types/scanner';

export default function Scanner() {
  const [scanning, setScanning] = useState(false);
  const [results, setResults] = useState<ScanResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setScanning(true);
    setError(null);
    
    try {
      const result = await scanCard(file);
      setResults(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to scan card');
    } finally {
      setScanning(false);
    }
  };

  return (
    <div className="ml-64 bg-gray-900 min-h-screen text-white p-6">
      <h1 className="text-2xl font-bold mb-6">Card Scanner</h1>
      
      <div className="max-w-xl mx-auto">
        <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-700 border-dashed rounded-lg cursor-pointer hover:bg-gray-800">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <Camera size={48} className="mb-4 text-gray-400" />
            <p className="mb-2 text-sm text-gray-400">
              <span className="font-semibold">Click to upload</span> or drag and drop
            </p>
            <p className="text-xs text-gray-500">PNG, JPG or JPEG</p>
          </div>
          <input 
            type="file" 
            className="hidden" 
            accept="image/*"
            onChange={handleFileUpload}
          />
        </label>

        {scanning && (
          <div className="mt-4 text-center text-gray-400">
            Scanning card...
          </div>
        )}

        {error && (
          <div className="mt-4 p-4 bg-red-900/50 text-red-200 rounded-lg">
            {error}
          </div>
        )}

        {results && (
          <div className="mt-4 space-y-4">
            {results.results.map((result, index) => (
              <div 
                key={index}
                className="bg-gray-800 p-4 rounded-lg"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="font-semibold">{result.name}</h3>
                    <p className="text-sm text-gray-400">{result.set_name}</p>
                  </div>
                  <span className="text-sm text-gray-400">
                    {(result.confidence * 100).toFixed(1)}% match
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}