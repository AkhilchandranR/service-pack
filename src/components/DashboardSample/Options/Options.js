import React from 'react';
import tickicon from '../../../images/tickicon.png';
import './Options.css';

function Options({ heading,caption }) {
    return (
        <div className='options'>
            <div className='options__logo'>
                <img src={tickicon} alt=''/>
            </div>
            <div className='options__description'>
                <h1>{heading}</h1>
                <p>{caption}</p>
            </div> 
        </div>
    )
}

export default Options
