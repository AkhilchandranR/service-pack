import React from 'react';
import './CareersBanner.css';
import rocket from '../../../images/rocket.png';
import Slide from 'react-reveal/Slide';


function careersBanner({bannerImage,buttonColor,vector,heading,caption}) {
    return (
        <div className="careersBanner">
            <img className='careersBanner__vector' src={vector} alt=''/>
            <div className="container">
                <div className="careersBanner__contents">
                    <div className="careersBanner__textContent">
                        <p>{caption}</p>
                        <h1>
                            {heading} 
                            <img src={rocket} alt="rocket"/> 
                        </h1>
                        <p className="careersBanner__subCaption">Our cognitive AI suit helps understand your customers
                         well and nurture them across all channels</p>
                        <button style={{backgroundColor:buttonColor}}>Let's Talk</button>
                    </div>
                    <div className="careersBanner__image">
                        <Slide bottom>
                            <img src={bannerImage} alt="Banner illustration"/>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default careersBanner
