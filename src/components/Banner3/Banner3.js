import React from 'react';
import rocket from '../../images/rocket.png';
import Slide from 'react-reveal/Slide';
import './Banner3.css';

function Banner3({bannerImage,buttonColor,vector,heading}) {
    return (
        <div className='banner3'>
            <img className='banner3__vector' src={vector} alt=''/>
            <div className="container">
                <div className="banner3__contents">
                    <div className="banner3__textContent">
                        <h1>
                            {heading} 
                            <img src={rocket} alt="rocket"/> 
                        </h1>
                        <p className="banner3__subCaption">Our cognitive AI suit helps understand your customers
                         well and nurture them across all channels</p>
                        <button style={{backgroundColor:buttonColor}}>Let's Talk</button>
                    </div>
                    <div className="banner3__image">
                        <Slide right>
                            <img src={bannerImage} alt="banner illustration"/>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner3
