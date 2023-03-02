import React, { useState } from 'react'
import logo from './Img/logo.jpeg';
import './CSS/dash.css';
import { AiOutlineUser } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import Logdetails from './logdetails';
import Webcam from 'react-webcam';
const Dashboard = () => {
    const [openDetails,setOpenDetails] = useState(false);
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
                <table className='dtable'>
                    <thead>
                        <tr>
                            <td><h3>Visual Inspection</h3></td>
                            <td><button type='submit' onClick={()=>{
                                setOpenDetails(true);
                            }}>Log Details</button>
                            </td>
                        </tr>
                    </thead>
                </table>
                {openDetails && <div className='pop-up-container'><Logdetails closeDetails={setOpenDetails}/></div>}
            </div>
            <div>
            <div className='GRID'>
                <div className='TopLeft' ><Webcam/></div>
                <div className='TopRight'><Webcam/></div>
                <div className='BottomLeft'><Webcam/></div>
                <div className='BottomRight'><Webcam/></div>
            </div>
            </div>
        </div>
    )
}

export default Dashboard