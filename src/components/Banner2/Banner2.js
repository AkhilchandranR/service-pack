import React from 'react';
import rocket from '../../images/rocket.png';
import Slide from 'react-reveal/Slide';
import './Banner2.css';

function Banner2({bannerImage,buttonColor,vector,heading,caption}) {
    return (
        <div className='banner2'>
            <div className="container">
            <img className='banner2__vector' src={vector} alt=''/>
                <div className="banner2__contents">
                    <div className="banner2__textContent">
                        <p>{caption}</p>
                        <h1>
                            {heading} 
                            
                        </h1>
                        <p className="banner2__subCaption">Provide unmatched Customer Service with our highly
                         customizable Zero code AI bot with Sentiment Prediction and Lead Generation capabilities.</p>
                        <button style={{backgroundColor:buttonColor}}>Let's Talk</button>
                    </div>
                    <div className="banner2__image">
                        <Slide bottom>
                            <img src={bannerImage} alt="banner illustration"/>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner2
