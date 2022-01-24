import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Stats from '../../components/Stats/Stats';
import TrustedClients from '../../components/TrustedClients/TrustedClients';
import Advertisement from '../../components/Advertisement/Advertisement';
import Products from '../../components/Products/Products';
import Footer from '../../components/Footer/Footer';
import banner2 from '../../images/banner2.svg';


import adleftblue from '../../images/adleftblue.svg';
import adright from '../../images/adrightblue.svg';

import './QualityWorks.css';
import DashboardSample from '../../components/DashboardSample/DashboardSample';

function QualityWorks() {
    return (
        <div className="qualityWorks">
            <Navbar/>

            <Banner 
            bannerImage={banner2} buttonColor="#0070c0"
            heading="Empowering Customer Experience with Artificial Intelligence ."
            caption="────  CX to the power of AI"/>

            <div className='qualityworks__stats'>
                <Stats 
                colour1="#0070c0" amount1="20" symbol1="%" caption1="Clickthrough Rate"
                colour2="#0070c0" amount2="60" symbol2="+" caption2="Downloads"
                colour3="#0070c0" amount3="20" symbol3="+" caption3="Active Users"
                colour4="#0070c0" amount4="60" symbol4="+" caption4="Downloads"
                />
            </div>

            <div className='qualityworks__dashboard'>
                <DashboardSample colour="#0070C0" bgcolor="#f4fbff" bgImage="to right, #bddff6,#c6e4f8,#cfe9fa,#d8eefd,#e1f3ff"/>
            </div>

            <TrustedClients heading="Hassle free integration with your existing tools"/>

            <div className='qualityworks__products'>
                <Products buttoncolor="#0070c0" heading="How AI enhances Customer Experience"/>
            </div>

            <div className="qualityworks__adv">
                <Advertisement 
                buttoncolor="#0070c0" imageLeft={adleftblue} imageRight={adright}/>
            </div>
            <Footer/>
        </div>
    )
}

export default QualityWorks
