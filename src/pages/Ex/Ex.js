import React from 'react';
import './Ex.css';
import exbanner from '../../images/exbanner.svg';
import cxvector from '../../images/cxvector.svg';
import cxcard1 from '../../images/cxcard1.svg';
import excard2 from '../../images/excard2.png';
import excard3 from '../../images/cxcard3.png';
import excard4 from '../../images/excard4.svg';
import cloud from '../../images/cloud.svg';
import exfeature1 from '../../images/exfeature1.svg';
import exfeature2 from '../../images/exfeature2.svg';
import exfeature3 from '../../images/exfeature3.svg';
import exfeature4 from '../../images/exfeature4.svg';
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



function Ex() {
  return(
    <div className='ex'>
        <Navbar/>
        <FeaturesBanner bannerImage={exbanner} buttonColor="#000000"
            heading="Employee Experience" abb="(EX)" vector={cxvector}/>

            <div className="ex__cards">
                <FeaturesCard cardImg={cxcard1} cardHeading="ESAT Index"/>
                <FeaturesCard cardImg={excard2} cardHeading="Employee Productivity"/>
                <FeaturesCard cardImg={excard3} cardHeading="Employee NPS"/>
                <FeaturesCard cardImg={excard4} cardHeading="Voice of Employee"/>
            </div>

            <div className='ex__features1'>
                <FeaturesElement featuresImg={exfeature1} heading="Heading about Quality Audit Automation" cloud={cloud}/>
            </div>

            <div className='ex__features1'>
                <FeaturesElementRev featuresImg={exfeature2} heading="Heading about Quality Metric 1"/>
            </div>

            <div className='ex__features1'>
                <FeaturesElement featuresImg={exfeature3} heading="Heading about Quality Metric 1"/>
            </div>

            <div className='ex__features1'>
                <FeaturesElementRev featuresImg={exfeature4} heading="Heading about Quality Metric 1"/>
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

export default Ex;
