import React from 'react'
import logo from './Img/logo.jpeg';
import './CSS/video.css';
import { AiOutlineUser } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
const ViewVideo = () => {
  return (
    <div>
      <div className='NavBar'>
        <img className='PHOTO' src={logo} alt="Ari-Logo" />
        <IconContext.Provider value={{ className: "Icon1", size: "2em" }}>
          <AiOutlineUser />
        </IconContext.Provider>
        <span style={{ "color": "black" }}>Profile</span>
      </div>
      <div>
        <div className='popup'>
          <div className='popup-header'>
            <h2>View Video</h2>
            <Link to='/logdetails'><button className='backb' type='button'>Back</button></Link>
          </div>
          <div className='bottom'>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewVideo