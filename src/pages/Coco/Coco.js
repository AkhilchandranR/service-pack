import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import CocoBanner from '../../components/Banner/CocoBanner/CocoBanner';
import Stats from '../../components/Stats/Stats';
import DashboardSample from '../../components/DashboardSample/DashboardSample';
import TrustedClients from '../../components/TrustedClients/TrustedClients';
import Products from '../../components/Products/Products';
import Advertisement from '../../components/Advertisement/Advertisement';

import banner from '../../images/cocobanner.svg';
import vector from '../../images/cocovector.svg';
import adleft from '../../images/adleftorange.svg';
import adright from '../../images/adrightorange.svg';
import './Coco.css';
import Footer from '../../components/Footer/Footer';

function Coco() {
  return(
    <div className='Coco'>
        <Navbar/>

        <CocoBanner
            bannerImage={banner} buttonColor="#ff4500"
            heading="Evolving new age biometrics with contactless AI."
            caption="────  CX to the power of AI" vector={vector}/>

        <div className='coco__stats'>
                <Stats 
                colour1="#ff4500" amount1="25" symbol1="%" caption1="Increase in revenue"
                colour2="#ff4500" amount2="35" symbol2="%" caption2="Increase in Avg. response time"
                colour3="#ff4500" amount3="40" symbol3="%" caption3="Reduction in AHT"
                colour4="#ff4500" amount4="45" symbol4="%" caption4="Increase in First Contact Resolution"
                colour5="#ff4500" amount5="55" symbol5="%" caption5="Reduction in Operational Cost"
                />
        </div>

        <div className='coco__dashboard'>
                <DashboardSample colour="#ff4500" bgcolor="#F9E3DA" bgImage="to right,#f4baa3,#FEC2AB"/>
        </div>

        <TrustedClients heading="Hassle free integration with your existing tools"/>

        <div className='coco__products'>
                <Products buttoncolor="#ff4500" heading="How AI enhances Customer Experience"/>
        </div>

        <div className="coco__adv">
                <Advertisement 
                buttoncolor="#ff4500" imageLeft={adleft} imageRight={adright}/>
        </div>

        <Footer/>

    </div>
  )
}

export default Coco;
