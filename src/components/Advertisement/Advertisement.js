import React from 'react';
import './Advertisement.css';
import Slide from 'react-reveal/Slide';


function Advertisement({ buttoncolor,imageLeft,imageRight }) {
    return (
        <div className="container">
            <Slide bottom>
            <div className="advertisement"> 
                <img src={imageLeft} alt="futureaiLeft"/>
                <div className="advertisement__description">
                    <h1>Ready to Start ?</h1>
                    <p>Footer call to action description Footer call to action description Footer call to action description</p>
                    <button style={{backgroundColor:buttoncolor}}>Request for a Demo</button>
                </div>
                <img src={imageRight} alt="futureaiRight"/>
            </div>
            </Slide>
        </div>
    )
}

export default Advertisement
