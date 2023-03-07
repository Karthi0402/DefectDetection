import React from 'react'
import logo from './Img/logo.jpeg';
import { AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import './CSS/viewlog.css';
const LogView = () => {
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
                        <div className='justify'>
                        <h2>View Log</h2>
                        <h2 className='h22'>Log Entry:</h2>
                        </div>
                        <Link to='/logdetails'><button className='backb' type='button'>Back</button></Link>
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
                                    <td>p</td>
                                    <td>o</td>
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

export default LogView