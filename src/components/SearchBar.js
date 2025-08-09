import React from 'react';
import { FiSearch } from 'react-icons/fi';

function SearchBar() {
  return (
    <div className="flex items-center bg-gray-800 px-4 py-2 rounded">
      <FiSearch className="text-gray-400 mr-2" />
      <input
        type="text"
        placeholder="Search..."
        className="bg-transparent outline-none text-white w-full"
      />
    </div>
  );
}

export default SearchBar;