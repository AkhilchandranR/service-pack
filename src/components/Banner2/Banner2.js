import React from 'react';
import rocket from '../../images/rocket.png';
import Slide from 'react-reveal/Slide';
import './Banner2.css';

function Banner2({bannerImage,buttonColor,vector,heading,caption}) {
    return (
        <div className='banner2'>
            <img className='banner2__vector' src={vector} alt=''/>
            <div className="container">
                <div className="banner2__contents">
                    <div className="banner2__textContent">
                        <p>{caption}</p>
                        <h1>
                            {heading} 
                            <img src={rocket} alt="rocket"/> 
                        </h1>
                        <p className="banner2__subCaption">Our cognitive AI suit helps understand your customers
                         well and nurture them across all channels</p>
                        <button style={{backgroundColor:buttonColor}}>Let's Talk</button>
                    </div>
                    <div className="banner2__image">
                        <Slide right>
                            <img src={bannerImage} alt="banner illustration"/>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner2
