import React from 'react';
import './Banner.css';
import rocket from '../../images/rocket.png';
import Slide from 'react-reveal/Slide';
import { Link } from 'react-scroll';


function Banner({bannerImage,buttonColor,vector,heading,caption}) {

    return (
        <div className="banner"> 
            <div className="container">
                <img className='banner__vector' src={vector} alt=''/>
                <div className="banner__contents">
                    <div className="banner__textContent">
                        <p>{caption}</p>
                        <h1>
                            {heading} 
                            <img src={rocket} alt="rocket"/> 
                        </h1>
                        <p className="banner__subCaption">Accelerating Omni-Channel CX with Natural Language Processing, making it <span className='scrollToServices'><Link to="services" smooth={true}>One-Stop shop for Contact Center AI</Link></span> needs.</p>
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
