import React from 'react';
import './FeaturesElement.css';
import rocket from '../../images/rocket.svg';

function FeaturesElement({heading,featuresImg,cloud,caption}) {
  return(
      <div className='featuresElement'>
          <img src={featuresImg} alt="feature"/>
          {/* <img src={cloud} className='cloud' alt=''/> */}
          <div className="featuresElement__content">
            <h1>
                {heading}
            </h1>
            <p className="featuresElement__subCaption">{caption}</p>
            <button>Let's Talk</button>
          </div>
      </div>
  );
}

export default FeaturesElement;
