import React from 'react';
import './CSS/log.css';
const Logdetails = ({closeDetails}) => {
  return (
    <div>
      <div>
        <div className='popup'>
          <div className='popup-header'>
            <h2>Log Details</h2>
            <h3 onClick={()=>closeDetails(false)}> X</h3>
          </div>
          <div className='bottom'>
            <table className='maintable'>
              <tr className='trow'>
                <td>Log Entry No.</td>
                <td>View Video</td>
                <td>View Logs</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Logdetails