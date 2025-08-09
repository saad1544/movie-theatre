
import React from 'react';

const MovieList = ({ movies, deleteMovie }) => {
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {movies.map((movie) => (
        <div key={movie._id} className="bg-gray-800 p-4 rounded-xl shadow-lg transition transform hover:scale-105">
          <img
            src={movie.poster}
            alt={movie.title}
            className="rounded-lg h-40 w-full object-cover"
          />
          <h3 className="text-xl font-bold mt-2">{movie.title}</h3>
          <p className="text-sm text-gray-300">{movie.description}</p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-gray-400">Genre: {movie.genre}</span>
            <span className="text-yellow-400 font-bold">{movie.rating}/10</span>
          </div>
          <button
            onClick={() => deleteMovie(movie._id)}
            className="mt-3 bg-red-600 text-white px-4 py-1 rounded hover:bg-red-700 transition"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
