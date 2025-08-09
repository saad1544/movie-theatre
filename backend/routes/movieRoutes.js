/*const express = require('express');
const Movie = require('../models/Movie');
const router = express.Router();

// Add Movie Route
router.post('/addmovie', async (req, res) => {
  const { title, description, rating, genre, poster } = req.body;

  try {
    const newMovie = new Movie({ title, description, rating, genre, poster });
    await newMovie.save();
    res.status(201).json(newMovie);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Delete Movie Route
router.delete('/:movieID', async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.movieID);
    res.json({ msg: 'Movie deleted successfully' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

// Get Movies Route
router.get('/', async (req, res) => {
  try {
    const movies = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;
//previos root
const express = require('express');
const router = express.Router();
const { getMovies, addMovie, deleteMovie } = require('../controllers/movieController');

// Get all movies
router.get('/', getMovies);

// Add new movie
router.post('/addmovie', addMovie);

// Delete a movie
router.delete('/:movieID', deleteMovie);

module.exports = router;

*/

// routes/movies.js
const express = require('express');
const router = express.Router();
const { getMovies, addMovie, deleteMovie } = require('../controllers/movieController');

// Get all movies
router.get('/', getMovies);

// Add new movie
router.post('/addmovie', addMovie);

// Delete a movie
router.delete('/:movieID', deleteMovie);

module.exports = router;
