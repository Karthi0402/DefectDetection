import React, { useState } from 'react';
import './CSS/log.css';
import {FaCaretSquareRight,FaFile} from 'react-icons/fa';
import { IconContext } from 'react-icons';
import ViewVideo from './viewvideo';
import ViewLog from './logview';
import './CSS/viewlog.css';
const Logdetails = ({closeDetails}) => {
  const [openVideo,setOpenVideo] = useState(false);
  const [openLog,setOpenLog] = useState(false);
  const handleIcon=()=>{
    setOpenVideo(true);  
  }
  const handleFile=()=>{
    setOpenLog(true);
  }
  return (
    <div>
      <div>
        <div className='popup'>
          <div className='popup-header'>
            <h2>Log Details</h2>
            <h3 onClick={()=>closeDetails(false)}> X</h3>
          </div>
          {openVideo && <div className='video-popup'><ViewVideo closeVideo={setOpenVideo}/></div>}
          <div className='bottom'>
            <table className='maintable' style={{backgroundColor:"white",borderCollapse:"collapse",textAlign:"center"}}>
              <tr style={{color:"white",backgroundColor:"chocolate",height:"3em"}}>
                <th>Log Entry</th>
                <th>View Video</th>
                <th>View Logs</th>
              </tr>
              <tbody>
              <tr>
                <td>1</td>
                <td><IconContext.Provider value={{ className: "iconn", size: "2em"}}><FaCaretSquareRight onClick={handleIcon}/></IconContext.Provider></td>
                <td><IconContext.Provider value={{className:"bicon", size: "1.5em"}}><FaFile onClick={handleFile}/></IconContext.Provider></td>
              
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
      {openLog && <div className='viewlog-popup'><ViewLog closeLog={setOpenLog}/></div>}
      </div>
  )
}

export default Logdetails