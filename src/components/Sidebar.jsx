import React from 'react';

const categories = ['All', 'Action', 'Comedy', 'Thriller', 'Horror', 'Drama', 'Fantasy', 'Animation'];

function Sidebar() {
  return (
    <div className="w-64 bg-gray-800 p-6">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      {categories.map((cat, index) => (
        <button
          key={index}
          className="block w-full text-left px-4 py-2 mb-2 rounded bg-gray-700 hover:bg-red-500 focus:outline-none"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;