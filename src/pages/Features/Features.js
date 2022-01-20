import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import featuresbanner from '../../images/featuresbanner.svg';
import './Features.css';

function Features() {
  return(
      
      <div className='features'>
          <Navbar/>

          <Banner 
            bannerImage={featuresbanner} buttonColor="#000000" 
            heading="Empowering Customer Experience with Artificial Intelligence ."/>

      </div>
  );
}

export default Features;
