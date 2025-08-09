/*const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  rating: Number,
  genre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Genre',
  },
  
  poster: String, // Path to poster image or URL
});

module.exports = mongoose.model('Movie', movieSchema);
*/
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 10,
  },
  genre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Genre',
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Movie', movieSchema);
