import React from 'react';
import rocket from '../../images/rocket.png';
import Slide from 'react-reveal/Slide';
import './Banner3.css';

function Banner3({bannerImage,buttonColor,vector,heading,caption}) {
    return (
        <div className='banner3'>
            <div className="container">
            <img className='banner3__vector' src={vector} alt=''/>
                <div className="banner3__contents">
                    <div className="banner3__textContent">
                        <p>{caption}</p>
                        <h1>
                            {heading} 
                        
                        </h1>
                        <p className="banner3__subCaption">Bringing a unified omni-channel CX platform powered by AI.</p>
                        <button style={{backgroundColor:buttonColor}}>Let's Talk</button>
                    </div>
                    <div className="banner3__image">
                        <Slide bottom>
                            <img src={bannerImage} alt="banner illustration"/>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner3
