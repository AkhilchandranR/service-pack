import React from 'react';
import './FeaturesElementRev.css';
import rocket from '../../images/rocket.svg';

function FeaturesElementRev({heading,featuresImg,cloud}) {
  return(
      <div className='featuresElementRev'>
          {/* <img src={cloud} className='cloud' alt=''/> */}
          <div className="featuresElementRev__content">
            <h1>
                {heading}
              <img src={rocket} alt="rocket"/> 
            </h1>
            <p className="featuresElementRev__subCaption">Our cognitive AI suit helps understand your customers
            well and nurture them across all channels</p>
            <button>Let's Talk</button>
          </div>
          <img src={featuresImg} alt="feature"/>
      </div>
  );
}

export default FeaturesElementRev;
