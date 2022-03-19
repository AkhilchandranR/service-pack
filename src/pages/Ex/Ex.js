import React from 'react';
import './Ex.css';
import exbanner from '../../images/exbanner.svg';
import cxvector from '../../images/cxvector.svg';
import cxcard1 from '../../images/cxcard1.svg';
import excard2 from '../../images/excard2.png';
import excard3 from '../../images/cxcard3.png';
import excard4 from '../../images/excard4.svg';
import oxcard1 from '../../images/oxcard1.png';
import cloud from '../../images/cloud.svg';
import exfeature1 from '../../images/exfeature1.svg';
import oxfeature1 from '../../images/oxfeature1.svg';
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
import Tools from '../../components/Tools/Tools';
import Advertisement from '../../components/Advertisement/Advertisement';
import Footer from '../../components/Footer/Footer';
import Stats from '../../components/Stats/Stats';



function Ex() {
  return(
    <div className='ex'>
        <Navbar/>
        <FeaturesBanner bannerImage={exbanner} buttonColor="#000000"
            heading="Did you know,71% of Executives say that 
            employee experience is critical to their company's success." vector={cxvector} subCaption="Offering a wide
            range of smart solutions to deliver seamless employee experience" author="FastTrack360"/>

            <div className='cx__stats'>
                <Stats 
                colour1="#0070c0" amount1="25" symbol1="%" caption1="Increase in revenue"
                colour2="#ffcd3a" amount2="35" symbol2="%" caption2="Increase in Avg. response time"
                colour3="#32cd32" amount3="40" symbol3="%" caption3="Reduction in AHT"
                colour4="#ff0066" amount4="45" symbol4="%" caption4="Increase in First Contact Resolution"
                colour5="#ff4500" amount5="55" symbol5="%" caption5="Reduction in Operational Cost"
                />
            </div>

            <div className="ex__cards">
                <FeaturesCard cardImg={oxcard1} cardHeading="Robotic Process Automation"/>
                <FeaturesCard cardImg={excard2} cardHeading="Employee Productivity"/>
                <FeaturesCard cardImg={excard4} cardHeading="Voice of Employee"/>
            </div>

            <div className='ex__features1'>
                <FeaturesElement featuresImg={oxfeature1} heading="Simplifying Complex repetitive tasks with ML." cloud={cloud}
                caption="A Deloitte RPA survey reported 86% improvement in productivity, 90% in quality and 92% in compliance.  
                CTA: Know More"/>
            </div>

            <div className='ex__features1'>
                <FeaturesElementRev featuresImg={exfeature2} heading="Boosting productivity through targeted training."
                caption="Increase in employee productivity by 40% with performance monitoring and targeted training."/>
            </div>

            <div className='ex__features1'>
                <FeaturesElement featuresImg={exfeature3} heading="Capturing employee pulse through feedback analytics."
                caption="14% Lower turnover rates in the companies that implement regular employee feedback."/>
            </div>

            {/* <div className='ex__features1'>
                <FeaturesElementRev featuresImg={exfeature4} heading="Heading about Quality Metric 1"/>
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

export default Ex;
