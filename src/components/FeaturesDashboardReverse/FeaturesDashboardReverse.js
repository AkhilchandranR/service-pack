import React from 'react';
import './FeaturesDashboardReverse.css';
import dashboard from '../../images/dashboard.png';
import rocket from '../../images/rocket.png';

function FeaturesDashboardReverse({ heading }) {
  return(
      <div className='featuresDashboardReverse'>
          <div className="featuresDashboard__content">
            <h1>
                {heading}
              <img src={rocket} alt="rocket"/> 
            </h1>
            <p className="features__subCaption">Our cognitive AI suit helps understand your customers
            well and nurture them across all channels</p>
            <button>Let's Talk</button>
          </div>
          <img src={dashboard} alt="dashboard"/>
          <div className='featuresReverse__fill'></div>
      </div>
  );
}

export default FeaturesDashboardReverse;
