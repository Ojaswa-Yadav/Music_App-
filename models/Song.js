const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
  title: { type: String, required: true },
  artist: { type: String, required: true },
  url: { type: String, required: true }, // URL to the song file
  coverImage: String, // URL to cover image of the song
  // Additional fields like genre, release date, etc., can be added
});

const Song = mongoose.model('Song', songSchema);

module.exports = Song;
