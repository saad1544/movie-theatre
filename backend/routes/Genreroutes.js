
const express = require('express');
const router = express.Router();
const { getGenres, addGenre, deleteGenre } = require('../controllers/genreController');

// Get all genres
router.get('/', getGenres);

// Add a genre
router.post('/addgenre', addGenre);

// Delete a genre
router.delete('/:genreID', deleteGenre);

module.exports = router;
