import React from 'react';
import './FeaturesBanner.css';
import rocket from '../../../images/rocket.svg';
import Slide from 'react-reveal/Slide';

function FeaturesBanner({bannerImage,buttonColor,vector,heading,caption,abb}) {
  return(
    <div className="featuresBanner">
        <img className='featuresBanner__vector' src={vector} alt=''/>
        <div className="container">
            <div className="featuresBanner__contents">
                <div className="featuresBanner__textContent">
                    <p>{caption}</p>
                    <h1>
                        {heading} <br/> {abb}
                        <img src={rocket} alt="rocket"/> 
                    </h1>
                    <p className="featuresBanner__subCaption">Our cognitive AI suit helps understand your customers
                    well and nurture them across all channels</p>
                    <button style={{backgroundColor:buttonColor}}>Let's Talk</button>
                </div>
                <div className="featuresBanner__image">
                    <Slide bottom>
                        <img src={bannerImage} alt="Banner illustration"/>
                    </Slide>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FeaturesBanner;
