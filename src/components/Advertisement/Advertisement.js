import React from 'react';
import './Advertisement.css';
import adleft from '../../images/adleft.svg';
import adright from '../../images/adright.png';


function Advertisement({ buttoncolor }) {
    return (
        <div className="container">
            <div className="advertisement"> 
                <img src={adleft} alt="girl-on-a-rocket"/>
                <div className="advertisement__description">
                    <h1>Ready to Start ?</h1>
                    <p>Footer call to action description Footer call to action description Footer call to action description</p>
                    <button style={{backgroundColor:buttoncolor}}>Request for a Demo</button>
                </div>
                <img src={adright} alt="futureai"/>
            </div>
        </div>
    )
}

export default Advertisement
