import React from 'react';
import './AboutBanner.css';
import Slide from 'react-reveal/Slide';


function aboutBanner({bannerImage,buttonColor,vector,heading,caption}) {
    return (
        <div className="aboutBanner">
            <div className="container">
            <img className='aboutBanner__vector' src={vector} alt=''/>
                <div className="aboutBanner__contents">
                    <div className="aboutBanner__textContent">
                        <p>{caption}</p>
                        <h1>
                            {heading} 
                        </h1>
                        <p className="aboutBanner__subCaption"> Is to be a One-Stop destination for Customer, 
                        Employee & Operational Experience for your business.</p>
                        <button style={{backgroundColor:buttonColor}}>Let's Talk</button>
                    </div>
                    <div className="aboutBanner__image">
                        <Slide bottom>
                            <img src={bannerImage} alt="Banner illustration"/>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default aboutBanner
