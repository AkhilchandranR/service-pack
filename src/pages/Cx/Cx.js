import React from 'react';
import './Cx.css';
import cxbanner from '../../images/cxbanner.svg';
import cxvector from '../../images/cxvector.svg';
import cxcard1 from '../../images/cxcard1.svg';
import cxcard2 from '../../images/cxcard2.svg';
import cxcard3 from '../../images/cxcard3.png';
import cxcard4 from '../../images/cxcard4.svg';
import cloud from '../../images/cloud.svg';
import cxfeature1 from '../../images/cxfeature1.svg';
import cxfeature2 from '../../images/cxfeature2.svg';
import cxfeature3 from '../../images/cxfeature3.svg';
import cxfeature4 from '../../images/cxfeature4.svg';
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



function Cx() {
  return(
    <div className='cx'>
        <Navbar/>
        <FeaturesBanner bannerImage={cxbanner} buttonColor="#000000"
            heading="Customer Experience" abb="(CX)" vector={cxvector}/>

            <div className="cx__cards">
                <FeaturesCard cardImg={cxcard1} cardHeading="Average Response Time"/>
                <FeaturesCard cardImg={cxcard2} cardHeading="Customer Service Satisfaction"/>
                <FeaturesCard cardImg={cxcard3} cardHeading="NPS"/>
                <FeaturesCard cardImg={cxcard4} cardHeading="Churn Reduction"/>
            </div>

            <div className='cx__features1'>
                <FeaturesElement featuresImg={cxfeature1} heading="Heading about Quality Audit Automation" cloud={cloud}/>
            </div>

            <div className='cx__features1'>
                <FeaturesElementRev featuresImg={cxfeature2} heading="Heading about Quality Metric 1"/>
            </div>

            <div className='cx__features1'>
                <FeaturesElement featuresImg={cxfeature3} heading="Heading about Quality Metric 1"/>
            </div>

            <div className='cx__features1'>
                <FeaturesElementRev featuresImg={cxfeature4} heading="Heading about Quality Metric 1"/>
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

export default Cx;
