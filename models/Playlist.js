const mongoose = require('mongoose');

const playlistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }],
  // Additional fields like description, public/private, etc., can be added
});

const Playlist = mongoose.model('Playlist', playlistSchema);

module.exports = Playlist;
