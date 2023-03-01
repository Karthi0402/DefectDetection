import React from 'react'
import logo from './Img/logo.jpeg';
import './CSS/dash.css';
import { AiOutlineUser } from 'react-icons/ai';
import { IconContext } from 'react-icons';
import { useNavigate } from 'react-router-dom';
const Dashboard = () => {
    const navigate = useNavigate();
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
                            <td><button type='submit' onClick={()=>navigate('/logdetails')}>Log Details</button></td>
                        </tr>
                    </thead>
                </table>
            </div>
            
            <div className='GRID'>
                <div className='TopLeft' >tl</div>
                <div className='TopRight'>tr</div>
                <div className='BottomLeft'>bl</div>
                <div className='BottomRight'>br</div>
            </div>
        </div>
    )
}

export default Dashboard