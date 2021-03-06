import React from 'react';
import rocket from '../../../images/rocket.png';
import Slide from 'react-reveal/Slide';
import './QwBanner.css';

function QwBanner({bannerImage,buttonColor,vector,heading,caption}) {
    return (
        <div className='QwBanner'>
            <div className="container">
            <img className='QwBanner__vector' src={vector} alt=''/>
                <div className="QwBanner__contents">
                    <div className="QwBanner__textContent">
                        <p>{caption}</p>
                        <h1>
                            {heading} 
                        </h1>
                        <p className="QwBanner__subCaption">Unlock the
                         full potential of Speech Analytics for an efficient Quality Monitoring, 
                         Compliance Automation, Agent Coaching & Reporting.</p>
                        <button style={{backgroundColor:buttonColor}}>Let's Talk</button>
                    </div>
                    <div className="QwBanner__image">
                        <Slide bottom>
                            <img src={bannerImage} alt="banner illustration"/>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default QwBanner
