import React, { useState } from 'react';
import axios from 'axios';

const AddMovie = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [genre, setGenre] = useState('');
  const [poster, setPoster] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!title || !description || !rating || !genre || !poster) {
      setError('All fields are required.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/api/movies/addmovie', {
        title,
        description,
        rating,
        genre,
        poster,
      });
      setSuccess(`Movie added: ${response.data.title}`);
      setTitle('');
      setDescription('');
      setRating('');
      setGenre('');
      setPoster('');
    } catch (err) {
      setError(err.response?.data?.msg || 'Error adding movie');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md space-y-6"
      >
        <h2 className="text-2xl font-bold text-center">Add New Movie</h2>

        {error && <div className="bg-red-600 p-2 rounded">{error}</div>}
        {success && <div className="bg-green-600 p-2 rounded">{success}</div>}

        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 rounded bg-gray-700 text-white"
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-3 rounded bg-gray-700 text-white"
          rows={3}
          required
        />
        <input
          type="number"
          placeholder="Rating (0-10)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full p-3 rounded bg-gray-700 text-white"
          min="0"
          max="10"
          required
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="w-full p-3 rounded bg-gray-700 text-white"
          required
        />
        <input
          type="text"
          placeholder="Poster URL"
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
          className="w-full p-3 rounded bg-gray-700 text-white"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
        >
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
