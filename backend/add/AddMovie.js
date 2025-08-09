import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddMovie = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [rating, setRating] = useState('');
  const [genre, setGenre] = useState('');
  const [poster, setPoster] = useState('');
  const [genres, setGenres] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get('/api/genres');
        setGenres(response.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchGenres();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/movies/addmovie', {
        title,
        description,
        rating,
        genre,
        poster,
      });
      alert('Movie added: ' + response.data.title);
      setTitle('');
      setDescription('');
      setRating('');
      setGenre('');
      setPoster('');
    } catch (err) {
      setError(err.response ? err.response.data.msg : 'Error adding movie');
    }
  };

  return (
    <div>
      <h2>Add Movie</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </label>
        <label>
          Rating (0-10):
          <input
            type="number"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
            min="0"
            max="10"
          />
        </label>
        <label>
          Genre:
          <select
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            required
          >
            <option value="">Select a genre</option>
            {genres.map((genre) => (
              <option key={genre._id} value={genre._id}>
                {genre.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Poster URL:
          <input
            type="text"
            value={poster}
            onChange={(e) => setPoster(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add Movie</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default AddMovie;
