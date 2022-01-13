import React from 'react';
import './Banner.css';
import rocket from '../../images/rocket.png';
import Slide from 'react-reveal/Slide';
import vector1 from '../../images/Vector01.svg';

function Banner({bannerImage,buttonColor}) {
    return (
        <div className="banner">
            <img className='banner__vector' src={vector1} alt=''/>
            <div className="container">
                <div className="banner__contents">
                    <div className="banner__textContent">
                        <p>────  CX to the power of AI</p>
                        <h1>
                            Empowering Customer Experience with Artificial Intelligence . 
                            <img src={rocket} alt="rocket"/> 
                        </h1>
                        <p className="banner__subCaption">Our cognitive AI suit helps understand your customers
                         well and nurture them across all channels</p>
                        <button style={{backgroundColor:buttonColor}}>Let's Talk</button>
                    </div>
                    <div className="banner__image">
                        <Slide right>
                            <img src={bannerImage} alt="banner"/>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
