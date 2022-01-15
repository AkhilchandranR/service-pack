import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Stats from '../../components/Stats/Stats';
import DashboardSample from '../../components/DashboardSample/DashboardSample';
import TrustedClients from '../../components/TrustedClients/TrustedClients';
import Products from '../../components/Products/Products';
import Advertisement from '../../components/Advertisement/Advertisement';

import adleft from '../../images/adleft.svg';
import adright from '../../images/adright.png';

import Footer from '../../components/Footer/Footer';
import banner4 from '../../images/banner4.svg';
import './VoiceDesk.css';

function VoiceDesk() {
    return (
        <div className='voiceDesk'>
            <Navbar/>
            <Banner bannerImage={banner4} buttonColor="#ffbf00"/>

            <div className='voiceDesk__stats'>
                <Stats 
                colour1="#ffbf00" amount1="20" symbol1="%" caption1="Clickthrough Rate"
                colour2="#ffbf00" amount2="60" symbol2="+" caption2="Downloads"
                colour3="#ffbf00" amount3="20" symbol3="+" caption3="Active Users"
                colour4="#ffbf00" amount4="60" symbol4="+" caption4="Downloads"
                />
            </div>

            <div className='voiceDesk__dashboard'>
                <DashboardSample colour="#ffbf00" bgcolor="#ffeef5" bgImage="to right,  #f1d993, #f5e0a4, #f8e7b4, #fceec5, #fff5d6"/>
            </div>

            <TrustedClients heading="Hassle free integration with your existing tools"/>

            <Products buttoncolor="#ffbf00"/>

            <div className="smartbot__adv">
                <Advertisement 
                buttoncolor="#ffbf00" imageLeft={adleft} imageRight={adright}/>
            </div>

            <Footer/>

        </div>
    )
}

export default VoiceDesk
