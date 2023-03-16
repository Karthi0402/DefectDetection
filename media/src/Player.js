import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import music from './assets/music.png';
import axios from 'axios';
const Player = () => {
  const [audio, setAudio] = useState();
  const [play,setPlay] = useState();
  const handleInput=(e)=>{
    setAudio(e.target.files[0])
    console.log(e.target.files)
  }
  const handleSubmit=(e)=>{
    const formData = new FormData()
    formData.append("audio",audio)
    const config = {
      headers:{'content-type':"multipart/formData"}
    }
    axios.post('http://localhost:3001/upload',formData,config).then((res)=>{
      setPlay(res)
      console.log(play)
    })
  }
  return (
    <div>
      <div>
        
        <h1 style={{ fontFamily: "times", color: "white" }}>Select a song</h1>
        <input type="file" name='file'  onChange={handleInput} style={{ fontFamily: "times", color: "white" }} />
        <button onClick={handleSubmit}>Upload</button>
    
      </div>
      <br />
      <center><div style={{ width: "20%", height: "250px", backgroundColor: "black" }}>
        <div style={{ height: "100%", width: "100%", backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover", display: "flex", backgroundImage: `url(${music})` }}></div>
      </div></center>
      <br />
      <ReactAudioPlayer
        src={play}
        type='audio/mp3'
        autoPlay
        controls
      />
    </div>
  )
}

export default Player