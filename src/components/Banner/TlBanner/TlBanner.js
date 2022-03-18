import React from 'react';
import rocket from '../../../images/rocket.png';
import Slide from 'react-reveal/Slide';
import './TlBanner.css';

function TlBanner({bannerImage,buttonColor,vector,heading,caption}) {
    return (
        <div className='TlBanner'>
            <div className="container">
            <img className='TlBanner__vector' src={vector} alt=''/>
                <div className="TlBanner__contents">
                    <div className="TlBanner__textContent">
                        <p>{caption}</p>
                        <h1>
                            {heading} 
                        
                        </h1>
                        <p className="TlBanner__subCaption">Comprehensive Feedback and Survey Analytics
                         summary to make an informed decision.</p>
                        <button style={{backgroundColor:buttonColor}}>Let's Talk</button>
                    </div>
                    <div className="TlBanner__image">
                        <Slide bottom>
                            <img src={bannerImage} alt="banner illustration"/>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TlBanner
