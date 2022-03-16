import React from 'react';
import './FeaturesCard.css';


function FeaturesCard({cardImg,cardHeading,cardBody}) {
  return(
      <div className='featuresCard'>
          <img src={cardImg} alt="cardimg"/>
          <h4>{cardHeading}</h4>
          <p>{cardBody}</p>
      </div>
  );
}

export default FeaturesCard;
