import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner2 from '../../components/Banner2/Banner2';
import Stats from '../../components/Stats/Stats';
import DashboardSample from '../../components/DashboardSample/DashboardSample';
import TrustedClients from '../../components/TrustedClients/TrustedClients';
import Products from '../../components/Products/Products';
import Advertisement from '../../components/Advertisement/Advertisement';

import adleft from '../../images/adleft.svg';
import adright from '../../images/adright.png';

import Footer from '../../components/Footer/Footer';
import banner6 from '../../images/banner6.svg';
import './Platform.css';
import Textaction from '../../components/Textaction/Textaction';

function Platform() {
    return (
        <div className='platform'>
            <Navbar/>
            <Banner2 
            bannerImage={banner6} buttonColor="#7030a0"
            heading="Heading about omni- Channel Customer Service Platform"/>

            <div className='platform__stats'>
                <Stats 
                colour1="#7030a0" amount1="20" symbol1="%" caption1="Clickthrough Rate"
                colour2="#7030a0" amount2="60" symbol2="+" caption2="Downloads"
                colour3="#7030a0" amount3="20" symbol3="+" caption3="Active Users"
                colour4="#7030a0" amount4="60" symbol4="+" caption4="Downloads"
                />
            </div>

            <div className='platform__dashboard'>
                <DashboardSample colour="#7030a0" bgcolor="#f7ecff" bgImage="to right, #d7b1f4, #debdf7, #e5c9fa, #ebd5fc, #f2e1ff"/>
            </div>

            <TrustedClients heading="Hassle free integration with your existing tools"/>

            <div className='platform__products'>
                <Products buttoncolor="#7030a0" heading="How AI enhances Customer Experience"/>
            </div>

            <div className='platform__action'>
                <Textaction bColor="#7030a0"/>
            </div>

            <div className="platform__adv">
                <Advertisement 
                buttoncolor="#7030a0" imageLeft={adleft} imageRight={adright}/>
            </div>

            <Footer/>
        </div>
    )
}

export default Platform
