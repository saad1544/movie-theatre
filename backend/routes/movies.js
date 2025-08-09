const express = require('express');
const router = express.Router();

// Example: Get all movies
router.get('/', (req, res) => {
  // Fetch movies from the database (this is just a placeholder)
  const movies = [
    { title: 'Movie 1', description: 'Description of movie 1', rating: 4.5 },
    { title: 'Movie 2', description: 'Description of movie 2', rating: 3.5 },
  ];
  res.json(movies);
});

// Example: Add a movie
router.post('/addmovie', (req, res) => {
  const { title, description, rating, genre, poster } = req.body;
  // Logic for adding a movie to the database goes here

  res.status(201).json({ message: 'Movie added successfully', movie: { title, description, rating, genre, poster } });
});

module.exports = router;
