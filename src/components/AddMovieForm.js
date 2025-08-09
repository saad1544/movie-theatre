/*import React from 'react';

const AddMovieForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-6 rounded-xl max-w-2xl mx-auto mb-10 space-y-4"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Movie</h2>
      {['title', 'description', 'rating', 'genre', 'poster'].map((field) => (
        <div key={field} className="mb-4">
          <label className="block text-sm font-semibold text-gray-400">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
          <input
            type={field === 'rating' ? 'number' : 'text'}
            name={field}
            placeholder={`Enter ${field}`}
            value={formData[field]}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-white mt-2"
            required
          />
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg"
      >
        Add Movie
      </button>
    </form>
  );
};

export default AddMovieForm;
*/
// AddMovieForm.js
import React from 'react';

const AddMovieForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-xl max-w-2xl mx-auto mb-10 space-y-4">
      <h2 className="text-2xl font-bold mb-4 text-center">Add New Movie</h2>
      {['title', 'description', 'rating', 'genre', 'poster'].map((field) => (
        <div key={field} className="mb-4">
          <label className="block text-sm font-semibold text-gray-400">{field.charAt(0).toUpperCase() + field.slice(1)}</label>
          <input
            type={field === 'rating' ? 'number' : 'text'}
            name={field}
            placeholder={`Enter ${field}`}
            value={formData[field]}
            onChange={handleChange}
            className="w-full p-3 rounded-lg bg-gray-700 text-white mt-2"
            required
          />
        </div>
      ))}
      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg"
      >
        Add Movie
      </button>
    </form>
  );
};

export default AddMovieForm;
