import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import Stats from '../../components/Stats/Stats';
import TrustedClients from '../../components/TrustedClients/TrustedClients';
import Advertisement from '../../components/Advertisement/Advertisement';
import Products from '../../components/Products/Products';
import Footer from '../../components/Footer/Footer';
import banner2 from '../../images/banner2.png';
import vector2 from '../../images/Vector01.svg';
import './QualityWorks.css';

function QualityWorks() {
    return (
        <div className="qualityWorks">
            <Navbar/>

            <Banner bannerImage={banner2} buttonColor="#0070c0"/>

            <div className='qualityworks__stats'>
                <Stats 
                colour1="#0070c0" amount1="20" symbol1="%" caption1="Clickthrough Rate"
                colour2="#0070c0" amount2="60" symbol2="+" caption2="Downloads"
                colour3="#0070c0" amount3="20" symbol3="+" caption3="Active Users"
                colour4="#0070c0" amount4="60" symbol4="+" caption4="Downloads"
                />
            </div>

            <TrustedClients heading="Hassle free integration with your existing tools"/>

            <Products buttoncolor="#0070c0"/>

            <div className="qualityworks__adv">
                <Advertisement buttoncolor="#0070c0"/>
            </div>
            <Footer/>
        </div>
    )
}

export default QualityWorks
