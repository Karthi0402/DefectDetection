import React from 'react';
import logo from './Img/logo.jpeg';
import './CSS/log.css';
import { AiOutlineUser } from 'react-icons/ai';
import { FaCaretSquareRight, FaFile } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import { Link } from 'react-router-dom';
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
        <div className='popup'>
          <div className='popup-header'>
            <h2>Log Details</h2>
            <Link to='/dashboard'><button className='backb' type='button'>Back</button></Link>
          </div>
          <div className='bottom'>
            <table className='maintable' style={{ backgroundColor: "white", borderCollapse: "collapse", textAlign: "center" }}>
              <tr style={{ color: "white", backgroundColor: "chocolate", height: "3em" }}>
                <th>Log Entry</th>
                <th>View Video</th>
                <th>View Logs</th>
              </tr>
              <tbody>
                <tr>
                  <td>1</td>
                  <td><IconContext.Provider value={{ className: "iconn", size: "2em" }}><Link to='/viewvideo'><FaCaretSquareRight /></Link></IconContext.Provider></td>
                  <td><IconContext.Provider value={{ className: "bicon", size: "1.5em" }}><Link to='/viewlog'><FaFile /></Link></IconContext.Provider></td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>View Video</td>
                  <td>View Logs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logdetails