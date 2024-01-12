const express = require('express');
const Song = require('../models/Song');
const router = express.Router();

// Get all songs
router.get('/', async (req, res) => {
  try {
    const songs = await Song.find({});
    res.json(songs);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a new song
router.post('/', async (req, res) => {
  try {
    const { title, artist, url, coverImage } = req.body;
    const newSong = new Song({ title, artist, url, coverImage });
    await newSong.save();

    res.status(201).json(newSong);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
