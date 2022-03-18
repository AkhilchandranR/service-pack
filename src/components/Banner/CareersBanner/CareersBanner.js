import React from 'react';
import './CareersBanner.css';
import rocket from '../../../images/rocket.png';
import Slide from 'react-reveal/Slide';


function careersBanner({bannerImage,buttonColor,vector,heading,caption}) {
    return (
        <div className="careersBanner">
            <div className="container">
            <img className='careersBanner__vector' src={vector} alt=''/>
                <div className="careersBanner__contents">
                    <div className="careersBanner__textContent">
                        <p>{caption}</p>
                        <h1>
                            {heading} 
                        </h1>
                        <p className="careersBanner__subCaption">If you think you are a team player.. Let’s talk.</p>
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
