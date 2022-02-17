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
            heading="Empowering Customer Experience with Artificial Intelligence ."
            caption="────  CX to the power of AI" vector={vector}/>

        <div className='coco__stats'>
            <Stats 
            colour1="#ff4500" amount1="20" symbol1="%" caption1="Clickthrough Rate"
            colour2="#ff4500" amount2="60" symbol2="+" caption2="Downloads"
            colour3="#ff4500" amount3="20" symbol3="+" caption3="Active Users"
            colour4="#ff4500" amount4="60" symbol4="+" caption4="Downloads"
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
