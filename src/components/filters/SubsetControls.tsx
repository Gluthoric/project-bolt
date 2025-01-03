import React, { useState } from 'react';

export default function SubsetControls() {
  const [showGroups, setShowGroups] = useState(false);
  const [showSubsets, setShowSubsets] = useState(false);
  const [trackWithMain, setTrackWithMain] = useState(false);

  return (
    <div className="space-y-3">
      <label className="flex items-center justify-between cursor-pointer">
        <span className="text-sm text-gray-400">Show Subset Groups</span>
        <input
          type="checkbox"
          checked={showGroups}
          onChange={(e) => setShowGroups(e.target.checked)}
          className="w-4 h-4 rounded bg-gray-700 border-gray-600 text-blue-600 focus:ring-blue-500"
        />
      </label>

      <label className="flex items-center justify-between cursor-pointer">
        <span className="text-sm text-gray-400">Show Subsets</span>
        <input
          type="checkbox"
          checked={showSubsets}
          onChange={(e) => setShowSubsets(e.target.checked)}
          className="w-4 h-4 rounded bg-gray-700 border-gray-600 text-blue-600 focus:ring-blue-500"
        />
      </label>

      <label className="flex items-center justify-between cursor-pointer">
        <span className="text-sm text-gray-400">Track with Main Set</span>
        <input
          type="checkbox"
          checked={trackWithMain}
          onChange={(e) => setTrackWithMain(e.target.checked)}
          className="w-4 h-4 rounded bg-gray-700 border-gray-600 text-blue-600 focus:ring-blue-500"
        />
      </label>
    </div>
  );
}