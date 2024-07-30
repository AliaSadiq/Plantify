// FilterDropdown.js

import React from 'react';

const FilterDropdown = ({ onFilterChange }) => {
  return (
    <div className="absolute top-full left-0 bg-white rounded-md shadow-lg py-1 mt-1 z-10">
      <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => onFilterChange('all')}>All</button>
      <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => onFilterChange('ongoing')}>Ongoing</button>
      <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => onFilterChange('past')}>Past</button>
      <button className="block w-full text-left px-4 py-2 text-sm text-gray-800 hover:bg-gray-200" onClick={() => onFilterChange('future')}>Future</button>
    </div>
  );
};

export default FilterDropdown;
