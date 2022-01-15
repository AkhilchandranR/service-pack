import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Stats from '../../components/Stats/Stats';
import DashboardSample from '../../components/DashboardSample/DashboardSample';
import TrustedClients from '../../components/TrustedClients/TrustedClients';
import Products from '../../components/Products/Products';
import banner3 from '../../images/banner3.svg';
import './Smartbot.css';
import Chatbotaction from '../../components/Chatbotaction/Chatbotaction';
import Advertisement from '../../components/Advertisement/Advertisement';
import adleft from '../../images/adleft.svg';
import adright from '../../images/adright.png';
import Footer from '../../components/Footer/Footer';

function Smartbot() {
    return (
        <div className='smartbot'>
            <Navbar/>
            <Banner bannerImage={banner3} buttonColor="#ff0066"/>

            <div className='smartbot__stats'>
                <Stats 
                colour1="#ff0066" amount1="20" symbol1="%" caption1="Clickthrough Rate"
                colour2="#ff0066" amount2="60" symbol2="+" caption2="Downloads"
                colour3="#ff0066" amount3="20" symbol3="+" caption3="Active Users"
                colour4="#ff0066" amount4="60" symbol4="+" caption4="Downloads"
                />
            </div>

            <div className='smartbot__dashboard'>
                <DashboardSample colour="#ff0066" bgcolor="#ffeef5" bgImage="to right, #fbb4d1,#fcc0d9,#fdcce0,#fed8e8,#ffe4e4"/>
            </div>

            <TrustedClients heading="Hassle free integration with your existing tools"/>

            <Products buttoncolor="#ff0066"/>

            <Chatbotaction/>

            <div className="smartbot__adv">
                <Advertisement 
                buttoncolor="#ff0066" imageLeft={adleft} imageRight={adright}/>
            </div>

            <Footer/>
        </div>
    )
}

export default Smartbot
