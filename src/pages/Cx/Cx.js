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
import oxcard4 from '../../images/oxcard4.png';
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
            heading="CX:Did you know, There is an 80% increase in revenue for businesses that focus on improving customer experience. -Forbes."
             vector={cxvector}
            subCaption="Presenting laser focused solutions for Customer Experience"/>

            <div className="cx__cards">
                <FeaturesCard cardImg={cxcard1} cardHeading="Average Response Time"
                cardBody=" Quick response to customer queries. 
                Reduce average response time by 35% with Chat & Voice AI."/>
                <FeaturesCard cardImg={cxcard2} cardHeading="Customer Service Satisfaction"
                cardBody="Refining Service Quality & Customer Satisfaction .
                Increase CSAT Score by 25% with precise solutions offered by intent prediction rather than content analysis."/>
                <FeaturesCard cardImg={oxcard4} cardHeading="Customer Delight" 
                cardBody="Proactively providing multiple solutions to choose from. 
                Increase customer retention by 20% with remedial recommendation engines."/>
            </div>

            <div className='cx__features1'>
                <FeaturesElement featuresImg={cxfeature1} heading="Quick response to customer queries." cloud={cloud}
                caption="Reduce average response time by 35% with Chat & Voice AI."/>
            </div>

            <div className='cx__features1'>
                <FeaturesElementRev featuresImg={cxfeature2} heading="Refining Service Quality & Customer Satisfaction "
                caption="Increase CSAT Score by 25% with precise solutions offered by intent prediction rather than content analysis."/>
            </div>

            <div className='cx__features1'>
                <FeaturesElement featuresImg={cxfeature3} heading="Proactively providing multiple solutions to choose from."
                caption="Increase customer retention by 20% with remedial recommendation engines."/>
            </div>

            {/* <div className='cx__features1'>
                <FeaturesElementRev featuresImg={cxfeature4} heading="Heading about Quality Metric 1"/>
            </div> */}

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
