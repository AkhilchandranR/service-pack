import React from 'react';
import './FeaturesCard.css';

function FeaturesCard({cardImg,cardHeading}) {
  return(
      <div className='featuresCard'>
          <img src={cardImg} alt="cardimg"/>
          <h4>{cardHeading}</h4>
          <p>Our cognitive AI suit helps understand your customers
              well and nurture them across all channels
          </p>
      </div>
  );
}

export default FeaturesCard;
