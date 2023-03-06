import React from 'react'

const LogView = ({closeLog}) => {
    return (
        <div>
            <div>
                <div className='log-popup'>
                    <div className='log-popup-header'>
                        <h2>View Log</h2>
                        <h3 onClick={()=>closeLog(false)}> X</h3>
                    </div>
                    <div className='bottom1'>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogView