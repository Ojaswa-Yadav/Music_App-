const express = require('express');
const Playlist = require('../models/Playlist');
const router = express.Router();

// Create a new playlist
router.post('/', async (req, res) => {
  try {
    const { name, createdBy, songs } = req.body;
    const newPlaylist = new Playlist({ name, createdBy, songs });
    await newPlaylist.save();

    res.status(201).json(newPlaylist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Add a song to a playlist
router.put('/:playlistId', async (req, res) => {
  try {
    const { playlistId } = req.params;
    const { songId } = req.body;

    const updatedPlaylist = await Playlist.findByIdAndUpdate(
      playlistId,
      { $push: { songs: songId } },
      { new: true }
    );

    res.json(updatedPlaylist);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
