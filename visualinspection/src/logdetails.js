import React from 'react'
import logo from './Img/logo.jpeg';
import './CSS/log.css';
import { AiOutlineUser } from 'react-icons/ai';
import { IconContext } from 'react-icons';
const Logdetails = () => {
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
        <table>
          <thead>
            <tr>
              <td><h3>Log Details</h3></td>
              <td><button type='submit'>Close</button></td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  )
}

export default Logdetails