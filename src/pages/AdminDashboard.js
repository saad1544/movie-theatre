/*
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeroSection from '../components/HeroSection';
import AddMovieForm from '../components/AddMovieForm';
import MovieList from '../components/MovieList';

const AdminDashboard = () => {
  const [movies, setMovies] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    rating: '',
    genre: '',
    poster: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:5000/api/movies');
      setMovies(res.data);
    } catch (err) {
      setMessage('Error fetching movies.');
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/movies/addmovie', formData);
      fetchMovies();
      setMessage('Movie added successfully!');
      setFormData({ title: '', description: '', rating: '', genre: '', poster: '' });
    } catch (err) {
      setMessage('Error adding movie.');
    }
  };

  const deleteMovie = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/movies/${id}`);
      fetchMovies();
      setMessage('Movie deleted successfully!');
    } catch (err) {
      setMessage('Error deleting movie.');
    }
  };

  return (
    <div className="dark bg-gray-900 min-h-screen text-white p-6">
      <HeroSection />
      
      {message && <div className="bg-green-600 text-white p-3 rounded-md mb-4">{message}</div>}

      <AddMovieForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
      
      {loading ? (
        <div className="text-center text-gray-300">Loading movies...</div>
      ) : (
        <MovieList movies={movies} deleteMovie={deleteMovie} />
      )}
    </div>
  );
};

export default AdminDashboard;

  */
 // AdminDashboard.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeroSection from '../components/HeroSection';
import AddMovieForm from '../components/AddMovieForm';
import MovieList from '../components/MovieList';

const AdminDashboard = () => {
  const [movies, setMovies] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    rating: '',
    genre: '',
    poster: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    setLoading(true);
    try {
      const res = await axios.get('http://localhost:5000/api/movies');
      setMovies(res.data);
    } catch (err) {
      setMessage('Error fetching movies.');
    }
    setLoading(false);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/movies/addmovie', formData);
      fetchMovies();
      setMessage('Movie added successfully!');
      setFormData({ title: '', description: '', rating: '', genre: '', poster: '' });
    } catch (err) {
      setMessage('Error adding movie.');
    }
  };

  const deleteMovie = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/movies/${id}`);
      fetchMovies();
      setMessage('Movie deleted successfully!');
    } catch (err) {
      setMessage('Error deleting movie.');
    }
  };

  return (
    <div className="dark bg-gray-900 min-h-screen text-white p-6">
      <HeroSection />
      {message && <div className="bg-green-600 text-white p-3 rounded-md mb-4">{message}</div>}
      <AddMovieForm formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
      {loading ? (
        <div className="text-center text-gray-300">Loading movies...</div>
      ) : (
        <MovieList movies={movies} deleteMovie={deleteMovie} />
      )}
    </div>
  );
};

export default AdminDashboard;

