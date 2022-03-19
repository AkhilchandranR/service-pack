import React from 'react';
import './Ox.css';
import oxbanner from '../../images/oxbanner.svg';
import cxvector from '../../images/cxvector.svg';
import oxcard1 from '../../images/oxcard1.png';
import oxcard2 from '../../images/oxcard2.png';
import oxcard3 from '../../images/oxcard3.png';
import oxcard4 from '../../images/oxcard4.png';
import cxcard4 from '../../images/cxcard4.svg';
import cxcard1 from '../../images/cxcard1.svg';
import cloud from '../../images/cloud.svg';
import oxfeature1 from '../../images/exfeature3.svg';
import oxfeature2 from '../../images/oxfeature2.svg';
import oxfeature3 from '../../images/oxfeature3.svg';
import oxfeature4 from '../../images/cxfeature4.svg';
import adleft from '../../images/adleftblack.svg';
import adright from '../../images/adrightblack.svg';
import Navbar from '../../components/Navbar/Navbar';
import FeaturesBanner from '../../components/Banner/FeaturesBanner/FeaturesBanner';
import FeaturesCard from '../../components/FeaturesCard/FeaturesCard';
import FeaturesElement from '../../components/FeaturesElement/FeaturesElement';
import FeaturesElementRev from '../../components/FeaturesElementRev/FeaturesElementRev';
import Tools from '../../components/Tools/Tools';
import Advertisement from '../../components/Advertisement/Advertisement';
import Footer from '../../components/Footer/Footer';
import Stats from '../../components/Stats/Stats';



function Ox() {
  return(
    <div className='ox'>
        <Navbar/>
        <FeaturesBanner bannerImage={oxbanner} buttonColor="#000000"
            heading="Did you Know, 75% of executives fear going out of business within five years if they don’t scale AI."
             vector={cxvector} subCaption="Featuring cutting edge scalable AI solutions for efficient operational excellence."
             author="SEMRush"/>

            <div className='cx__stats'>
                <Stats 
                colour1="#0070c0" amount1="25" symbol1="%" caption1="Increase in revenue"
                colour2="#ffcd3a" amount2="35" symbol2="%" caption2="Increase in Avg. response time"
                colour3="#32cd32" amount3="40" symbol3="%" caption3="Reduction in AHT"
                colour4="#ff0066" amount4="45" symbol4="%" caption4="Increase in First Contact Resolution"
                colour5="#ff4500" amount5="55" symbol5="%" caption5="Reduction in Operational Cost"
                />
            </div>

            <div className="ox__cards">
                <FeaturesCard cardImg={cxcard1} cardHeading="Business Intelligence"/>
                <FeaturesCard cardImg={oxcard2} cardHeading="Cost Saving" />
                <FeaturesCard cardImg={cxcard4} cardHeading="Churn Reduction"/>
            </div>

            <div className='ox__features1'>
                <FeaturesElement featuresImg={oxfeature1} heading="Enabling data driven decision making" cloud={cloud}
                caption="According to McKinsky, Companies that make use of customer analytics are 23 times more likely to
                 outperform their competitors in customer acquisition & retention."/>
            </div>

            <div className='ox__features1'>
                <FeaturesElementRev featuresImg={oxfeature3} heading="Improvised cost saving through machine learning and automation."
                caption="According to NASSCOM, organizations that implement RPA can reduce operational costs upto 65%."/>
            </div>

            <div className='ox__features1'>
                <FeaturesElement featuresImg={oxfeature4} heading="Deescalating irate customers by offering precise solutions and churn reduction."
                caption="According to Forbes, an astounding 85% of customer churn can be prevented through rich customer Experience."/>
            </div>

            {/* <div className='ox__features1'>
                <FeaturesElementRev featuresImg={oxfeature4} heading="Heading about Quality Metric 1"/>
            </div> */}

            <Tools heading="Hassle free integration with your existing tools"/>
          
            <div className="features__adv">
                  <Advertisement 
                  buttoncolor="black" imageLeft={adleft} imageRight={adright}/>
            </div>

            <Footer/>
    </div>
  )
}

export default Ox;
