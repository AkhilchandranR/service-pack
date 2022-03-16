import React from 'react';
import rocket from '../../../images/rocket.png';
import Slide from 'react-reveal/Slide';
import './VdBanner.css';

function VdBanner({bannerImage,buttonColor,vector,heading,caption}) {
    return (
        <div className='vdBanner'>
            <div className="container">
            <img className='vdBanner__vector' src={vector} alt=''/>
                <div className="vdBanner__contents">
                    <div className="vdBanner__textContent">
                        <p>{caption}</p>
                        <h1>
                            {heading} 
                            <img src={rocket} alt="rocket"/> 
                        </h1>
                        <p className="vdBanner__subCaption">Hyper intelligent Conversational IVR for Customer Service,
                         Reminders, Reservations & Routing.</p>
                        <button style={{backgroundColor:buttonColor}}>Let's Talk</button>
                    </div>
                    <div className="vdBanner__image">
                        <Slide bottom>
                            <img src={bannerImage} alt="banner illustration"/>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VdBanner
