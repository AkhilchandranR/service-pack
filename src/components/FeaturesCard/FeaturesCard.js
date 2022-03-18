import React from 'react';
import './FeaturesCard.css';


function FeaturesCard({cardImg,cardHeading}) {
  return(
      <div className='featuresCard'>
          <img src={cardImg} alt="cardimg"/>
          <h4>{cardHeading}</h4>
      </div>
  );
}

export default FeaturesCard;
