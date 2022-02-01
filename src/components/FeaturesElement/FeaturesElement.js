import React from 'react';
import './FeaturesElement.css';
import rocket from '../../images/rocket.svg';

function FeaturesElement({heading,featuresImg,cloud}) {
  return(
      <div className='featuresElement'>
          <img src={featuresImg} alt="feature"/>
          {/* <img src={cloud} className='cloud' alt=''/> */}
          <div className="featuresElement__content">
            <h1>
                {heading}
              <img src={rocket} alt="rocket"/> 
            </h1>
            <p className="featuresElement__subCaption">Our cognitive AI suit helps understand your customers
            well and nurture them across all channels</p>
            <button>Let's Talk</button>
          </div>
      </div>
  );
}

export default FeaturesElement;
