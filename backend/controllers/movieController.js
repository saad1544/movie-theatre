
const Movie = require('../models/Movie');

exports.getMovies = async (req, res) => {
  try {
    const movies = await Movie.find().populate('genre');
    res.json(movies);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.addMovie = async (req, res) => {
  const { title, description, rating, genre, poster } = req.body;

  if (!title || !description || !rating || !genre || !poster) {
    return res.status(400).json({ msg: 'All fields are required' });
  }

  if (isNaN(rating) || rating < 0 || rating > 10) {
    return res.status(400).json({ msg: 'Rating must be a number between 0 and 10' });
  }

  try {
    const movie = new Movie({ title, description, rating, genre, poster });
    await movie.save();
    res.status(201).json(movie);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.deleteMovie = async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.movieID);
    res.json({ message: 'Movie deleted' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
