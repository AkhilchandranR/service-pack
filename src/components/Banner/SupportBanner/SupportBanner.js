import React from 'react';
import './SupportBanner.css';
import rocket from '../../../images/rocket.png';
import Slide from 'react-reveal/Slide';


function supportBanner({bannerImage,buttonColor,vector,heading,caption}) {
    return (
        <div className="supportBanner">
            <div className="container">
            <img className='supportBanner__vector' src={vector} alt=''/>
                <div className="supportBanner__contents">
                    <div className="supportBanner__textContent">
                        <p>{caption}</p>
                        <h1>
                            {heading} 
                        </h1>
                        <p className="supportBanner__subCaption">Group of experts at your service.</p>
                        <button style={{backgroundColor:buttonColor}}>Let's Talk</button>
                    </div>
                    <div className="supportBanner__image">
                        <Slide bottom>
                            <img src={bannerImage} alt="Banner illustration"/>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default supportBanner
