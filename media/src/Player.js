import React, { useState } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import music from './assets/music.png';
const Player = () => {
  const [audio,setAudio] = useState();
 const handleFile=()=>{
    console.log(audio);
  }
  return (
    <div> 
        <div>
      <h1 style={{fontFamily:"times",color:"white"}}>Select a song</h1>
      <input type="file" value={audio} onChange={e=>setAudio(e.target.value)} onClick={handleFile} style={{fontFamily:"times",color:"white"}}/>
    </div>
        <br/>
        <center><div style={{width:"20%",height:"250px",backgroundColor:"black"}}>
        <div style={{height:"100%",width:"100%",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:"cover",display:"flex",backgroundImage:`url(${music})`}}></div>
        </div></center>
        <br/>
        <ReactAudioPlayer 
        src= {audio}
        type='audio/mp3'
        autoPlay
        controls
        />
    </div>
  )
}

export default Player