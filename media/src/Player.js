import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import pawan from './assets/pspk.mp3';
import music from './assets/music.png';
import File from './Files';
import { file1 } from './play';
const Player = () => {
  return (
    <div> 
        <File/>
        <br/>
        {/* <img src={music} style={{}}/> */}
        <center><div style={{width:"20%",height:"250px",backgroundColor:"black",backgroundImage:`url`}}>
        </div></center>
        <br/>
        <ReactAudioPlayer 
        src={file1}
        autoPlay
        controls
        />
    </div>
  )
}

export default Player