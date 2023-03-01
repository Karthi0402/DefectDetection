import React, { useState } from 'react'
import logo from './Img/logo.jpeg';
import './CSS/dash.css';
import { AiOutlineUser } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import Logdetails from './logdetails';
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
                <table>
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
            <div className="grid0">
            <div className='GRID'>
                <div className='TopLeft' >tl</div>
                <div className='TopRight'>tr</div>
                <div className='BottomLeft'>bl</div>
                <div className='BottomRight'>br</div>
            </div>
            </div>
        </div>
    )
}

export default Dashboard