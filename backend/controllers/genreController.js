/*const Genre = require('../models/Genre');

exports.getGenres = async (req, res) => {
  const genres = await Genre.find();
  res.json(genres);
};

exports.addGenre = async (req, res) => {
  const genre = new Genre(req.body);
  await genre.save();
  res.status(201).json(genre);
};

exports.deleteGenre = async (req, res) => {
  await Genre.findByIdAndDelete(req.params.genreID);
  res.json({ message: 'Genre deleted' });
};
*/
const Genre = require('../models/Genre');

exports.getGenres = async (req, res) => {
  try {
    const genres = await Genre.find();
    res.json(genres);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.addGenre = async (req, res) => {
  const { name } = req.body;

  if (!name) return res.status(400).json({ msg: 'Genre name is required' });

  try {
    const existing = await Genre.findOne({ name });
    if (existing) return res.status(400).json({ msg: 'Genre already exists' });

    const genre = new Genre({ name });
    await genre.save();
    res.status(201).json(genre);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};

exports.deleteGenre = async (req, res) => {
  try {
    await Genre.findByIdAndDelete(req.params.genreID);
    res.json({ message: 'Genre deleted' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
};
