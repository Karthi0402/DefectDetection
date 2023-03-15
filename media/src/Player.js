import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import pawan from './assets/pspk.mp3';
import File from './Files';
// import { file1 } from './play';
const Player = () => {
  return (
    <div> 
        <File/>
        <br/>
        
        <ReactAudioPlayer 
        src={pawan}
        autoPlay
        controls
        />
    </div>
  )
}

export default Player