/*// App.jsx
import React from 'react';
import Sidebar from './components/Sidebar';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';

const movies = [
  {
    title: 'Avengers: Endgame',
    duration: '2h 15min',
    genre: 'Action',
    img: 'https://image.tmdb.org/t/p/w500/q6725aR8Zs4IwGMXzZT8aC8lh41.jpg',
  },
  {
    title: 'After',
    duration: '2h 15min',
    genre: 'Drama',
    img: 'https://image.tmdb.org/t/p/w500/u3B2YKUjWABcxXZ6Nm9h10hLUbh.jpg',
  },
  {
    title: 'The Hole in the Ground',
    duration: '2h 15min',
    genre: 'Horror',
    img: 'https://image.tmdb.org/t/p/w500/fxvD7QXnDFZg9yYq0OMa7ri9W4x.jpg',
  },
];

function App() {
  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <SearchBar />
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;*/
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import HomePage from './components/Homepage'; // your movie page
import Login from './components/Login';
import Signup from './components/Signup';
import AddMovie from './components/AddMovie';
import AddGenre from './components/AddGenre';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/add-movie" element={<AddMovie />} />
        <Route path="/AddGenre" element={<AddGenre/>} />
      </Routes>
    </Router>
  );
}

export default App;

