import React, { useState, useRef } from 'react';
import './MusicPlayer.css';

function MusicPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioPlayer = useRef(null); // Reference to the audio tag

    const playPause = () => {
        const { current } = audioPlayer;

        if (isPlaying) {
            current.pause();
        } else {
            current.play();
        }

        setIsPlaying(!isPlaying);
    };

    return (
        <div>
            <h2>Music Player</h2>
            <audio ref={audioPlayer} src="path_to_your_song.mp3" preload="metadata"></audio>
            <button onClick={playPause}>{isPlaying ? 'Pause' : 'Play'}</button>
        </div>
    );
}

export default MusicPlayer;
