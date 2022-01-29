import React from 'react';
import './ContactBanner.css';
import rocket from '../../../images/rocket.png';
import Slide from 'react-reveal/Slide';


function contactBanner({bannerImage,buttonColor,vector,heading,caption}) {
    return (
        <div className="contactBanner">
            <img className='contactBanner__vector' src={vector} alt=''/>
            <div className="container">
                <div className="contactBanner__contents">
                    <div className="contactBanner__textContent">
                        <p>{caption}</p>
                        <h1>
                            {heading} 
                            <img src={rocket} alt="rocket"/> 
                        </h1>
                        <p className="contactBanner__subCaption">Our cognitive AI suit helps understand your customers
                         well and nurture them across all channels</p>
                        <button style={{backgroundColor:buttonColor}}>Let's Talk</button>
                    </div>
                    <div className="contactBanner__image">
                        <Slide bottom>
                            <img src={bannerImage} alt="Banner illustration"/>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default contactBanner
