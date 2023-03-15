import React from 'react';
import ReactAudioPlayer from 'react-audio-player';

const Player = () => {
  return (
    <div>
        <ReactAudioPlayer 
        src='pawan.mp3'
        autoPlay
        controls
        />
    </div>
  )
}

export default Player