import React from 'react';
import './Banner.css';
import rocket from '../../images/rocket.png';
import Slide from 'react-reveal/Slide';


function Banner({bannerImage,buttonColor,vector,heading,caption}) {
    return (
        <div className="banner">
            <img className='banner__vector' src={vector} alt=''/>
            <div className="container">
                <div className="banner__contents">
                    <div className="banner__textContent">
                        <p>{caption}</p>
                        <h1>
                            {heading} 
                            <img src={rocket} alt="rocket"/> 
                        </h1>
                        <p className="banner__subCaption">Our cognitive AI suit helps understand your customers
                         well and nurture them across all channels</p>
                        <button style={{backgroundColor:buttonColor}}>Let's Talk</button>
                    </div>
                    <div className="banner__image">
                        <Slide bottom>
                            <img src={bannerImage} alt="banner illustration"/>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
