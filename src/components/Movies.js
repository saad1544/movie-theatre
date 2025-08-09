import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('/movies').then(res => setMovies(res.data));
  }, []);

  const deleteMovie = id => {
    axios.delete(`/movies/${id}`).then(() => {
      setMovies(movies.filter(m => m._id !== id));
    });
  };

  return (
    <div className="container mt-4">
      <h2>Movie List</h2>
      <ul className="list-group">
        {movies.map(movie => (
          <li key={movie._id} className="list-group-item d-flex justify-content-between">
            {movie.title} ({movie.year}) - {movie.genre}
            <button className="btn btn-danger btn-sm" onClick={() => deleteMovie(movie._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
