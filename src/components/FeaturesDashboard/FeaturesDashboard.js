import React from 'react';
import './FeaturesDashboard.css';
import dashboard from '../../images/dashboard.png';
import rocket from '../../images/rocket.png';

function FeaturesDashboard({heading}) {
  return(
      <div className='featuresDashboard'>
          <img src={dashboard} alt="dashboard"/>
          <div className="featuresDashboard__content">
            <h1>
                {heading}
              <img src={rocket} alt="rocket"/> 
            </h1>
            <p className="features__subCaption">Our cognitive AI suit helps understand your customers
            well and nurture them across all channels</p>
            <button>Let's Talk</button>
          </div>
          <div className='features__fill'></div>
      </div>
  );
}

export default FeaturesDashboard;
