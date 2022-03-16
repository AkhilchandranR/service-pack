import React from 'react';
import './FeaturesBanner.css';
import rocket from '../../../images/rocket.svg';
import Slide from 'react-reveal/Slide';

function FeaturesBanner({bannerImage,buttonColor,vector,heading,caption,abb,subCaption}) {
  return(
    <div className="featuresBanner">
        <div className="container">
        <img className='featuresBanner__vector' src={vector} alt=''/>
            <div className="featuresBanner__contents">
                <div className="featuresBanner__textContent">
                    <p>{caption}</p>
                    <h1>
                        {heading} <br/> {abb}
                        <img src={rocket} alt="rocket"/> 
                    </h1>
                    <p className="featuresBanner__subCaption">{subCaption}</p>
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
