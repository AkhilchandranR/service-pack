import React from 'react';
import './Ox.css';
import oxbanner from '../../images/oxbanner.svg';
import cxvector from '../../images/cxvector.svg';
import oxcard1 from '../../images/oxcard1.png';
import oxcard2 from '../../images/oxcard2.png';
import oxcard3 from '../../images/oxcard3.png';
import oxcard4 from '../../images/oxcard4.png';
import cloud from '../../images/cloud.svg';
import oxfeature1 from '../../images/oxfeature1.svg';
import oxfeature2 from '../../images/oxfeature2.svg';
import oxfeature3 from '../../images/oxfeature3.svg';
import oxfeature4 from '../../images/oxfeature4.svg';
import adleft from '../../images/adleftblack.svg';
import adright from '../../images/adrightblack.svg';
import Navbar from '../../components/Navbar/Navbar';
import FeaturesBanner from '../../components/Banner/FeaturesBanner/FeaturesBanner';
import FeaturesCard from '../../components/FeaturesCard/FeaturesCard';
import FeaturesElement from '../../components/FeaturesElement/FeaturesElement';
import FeaturesElementRev from '../../components/FeaturesElementRev/FeaturesElementRev';
import TrustedClients from '../../components/TrustedClients/TrustedClients';
import Advertisement from '../../components/Advertisement/Advertisement';
import Footer from '../../components/Footer/Footer';



function Ox() {
  return(
    <div className='ox'>
        <Navbar/>
        <FeaturesBanner bannerImage={oxbanner} buttonColor="#000000"
            heading="Operational Experience" abb="(OX)" vector={cxvector}/>

            <div className="ox__cards">
                <FeaturesCard cardImg={oxcard1} cardHeading="Process Automation"/>
                <FeaturesCard cardImg={oxcard2} cardHeading="Cost Saving"/>
                <FeaturesCard cardImg={oxcard3} cardHeading="CSAT"/>
                <FeaturesCard cardImg={oxcard4} cardHeading="Customer Insights"/>
            </div>

            <div className='ox__features1'>
                <FeaturesElement featuresImg={oxfeature1} heading="Heading about Quality Audit Automation" cloud={cloud}/>
            </div>

            <div className='ox__features1'>
                <FeaturesElementRev featuresImg={oxfeature2} heading="Heading about Quality Metric 1"/>
            </div>

            <div className='ox__features1'>
                <FeaturesElement featuresImg={oxfeature3} heading="Heading about Quality Metric 1"/>
            </div>

            <div className='ox__features1'>
                <FeaturesElementRev featuresImg={oxfeature4} heading="Heading about Quality Metric 1"/>
            </div>

            <TrustedClients heading="Hassle free integration with your existing tools"/>
          
            <div className="features__adv">
                  <Advertisement 
                  buttoncolor="black" imageLeft={adleft} imageRight={adright}/>
            </div>

            <Footer/>
    </div>
  )
}

export default Ox;
