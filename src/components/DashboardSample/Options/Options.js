import React from 'react';
import tickicon from '../../../images/tickicon.png';
import './Options.css';

function Options() {
    return (
        <div className='options'>
            <div className='options__logo'>
                <img src={tickicon} alt=''/>
            </div>
            <div className='options__description'>
                <h1>Sample title sample title</h1>
                <p>Our cognitive AI suit helps understand your customers well and nurtue them across all channels</p>
            </div> 
        </div>
    )
}

export default Options
