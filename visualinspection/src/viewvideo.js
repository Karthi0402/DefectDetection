import React from 'react'
import './CSS/video.css';
const ViewVideo = ({closeVideo}) => {
  return (
    <div>
        <div>
        <div className='video-popup'>
          <div className='video-popup-header'>
            <h2>View video</h2>
            <h3 onClick={()=>closeVideo(false)}> X</h3>
          </div>
          <div className='bottom'>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewVideo