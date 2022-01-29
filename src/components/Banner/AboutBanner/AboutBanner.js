import React from 'react';
import './AboutBanner.css';
import rocket from '../../../images/rocket.png';
import Slide from 'react-reveal/Slide';


function aboutBanner({bannerImage,buttonColor,vector,heading,caption}) {
    return (
        <div className="aboutBanner">
            <img className='aboutBanner__vector' src={vector} alt=''/>
            <div className="container">
                <div className="aboutBanner__contents">
                    <div className="aboutBanner__textContent">
                        <p>{caption}</p>
                        <h1>
                            {heading} 
                            <img src={rocket} alt="rocket"/> 
                        </h1>
                        <p className="aboutBanner__subCaption">Our cognitive AI suit helps understand your customers
                         well and nurture them across all channels</p>
                        <button style={{backgroundColor:buttonColor}}>Let's Talk</button>
                    </div>
                    <div className="aboutBanner__image">
                        <Slide right>
                            <img src={bannerImage} alt="Banner illustration"/>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default aboutBanner
