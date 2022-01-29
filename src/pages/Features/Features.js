import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner2 from '../../components/Banner2/Banner2';
import featuresbanner from '../../images/featuresbanner.svg';
import './Features.css';
import FeaturesDashboard from '../../components/FeaturesDashboard/FeaturesDashboard';
import FeaturesDashboardReverse from '../../components/FeaturesDashboardReverse/FeaturesDashboardReverse';
import FeaturesCard from '../../components/FeaturesCard/FeaturesCard';
import TrustedClients from '../../components/TrustedClients/TrustedClients';
import Advertisement from '../../components/Advertisement/Advertisement';
import Footer from '../../components/Footer/Footer';
import card1 from '../../images/card1.png';
import card2 from '../../images/card2.png';
import card3 from '../../images/card3.png';
import adleft from '../../images/adleftblack.svg';
import adright from '../../images/adrightblack.svg';
import vector from '../../images/fvector.svg';
import Slide from 'react-reveal/Slide';

function Features() {
  return(
      
      <div className='features'>
          <Navbar/>

          <Banner2 
            bannerImage={featuresbanner} buttonColor="#000000" 
            heading="Empowering Customer Experience with Artificial Intelligence ." 
            vector={vector}/>

          <Slide bottom>
            <div className='features__cards'>
              <FeaturesCard cardImg={card1} cardHeading="Strategy & Research."/>
              <FeaturesCard cardImg={card2} cardHeading="Report & Analytics."/>
              <FeaturesCard cardImg={card3} cardHeading="Marketing & Management"/>
            </div>
          </Slide>
          

          <div className='features__sectionDashboard'>
            <FeaturesDashboardReverse heading="Heading about Quality Metric 1"/>
          </div>

          <div className='features__sectionDashboard2'>
            <FeaturesDashboard heading="Heading about Quality Metric 1"/>
          </div>

          <div className='features__sectionDashboard2'>
            <FeaturesDashboardReverse heading="Heading about Quality Metric 1"/>
          </div>
          
          <TrustedClients heading="Hassle free integration with your existing tools"/>
          
          <div className="features__adv">
                <Advertisement 
                buttoncolor="black" imageLeft={adleft} imageRight={adright}/>
          </div>

          <Footer/>

      </div>
  );
}

export default Features;
