import React from 'react';
import './FeaturesElementRev.css';
import rocket from '../../images/rocket.svg';

function FeaturesElementRev({heading,featuresImg,cloud,caption}) {
  return(
      <div className='featuresElementRev'>
          {/* <img src={cloud} className='cloud' alt=''/> */}
          <div className="featuresElementRev__content">
            <h1>
                {heading}
            </h1>
            <p className="featuresElementRev__subCaption">{caption}</p>
            <button>Let's Talk</button>
          </div>
          <img src={featuresImg} alt="feature"/>
      </div>
  );
}

export default FeaturesElementRev;
