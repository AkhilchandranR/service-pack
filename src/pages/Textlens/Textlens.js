import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner3 from '../../components/Banner3/Banner3';
import Stats from '../../components/Stats/Stats';
import DashboardSample from '../../components/DashboardSample/DashboardSample';
import TrustedClients from '../../components/TrustedClients/TrustedClients';
import Products from '../../components/Products/Products';
import Advertisement from '../../components/Advertisement/Advertisement';

import adleft from '../../images/adleftgreen.svg';
import adright from '../../images/adrightgreen.svg';

import Footer from '../../components/Footer/Footer';
import banner5 from '../../images/banner5.svg';
import './Textlens.css';
import Textaction from '../../components/Textaction/Textaction';
import vector from '../../images/tlvector.svg';

function Textlens() {
    return (
        <div className='textLens'>
            <Navbar/>
            <Banner3
            bannerImage={banner5} buttonColor="#34cd32"
            heading="Empowering Customer Experience with Artificial Intelligence ."
            caption="────  CX to the power of AI" vector={vector}/>

            <div className='textlens__stats'>
                <Stats 
                colour1="#32cd32" amount1="20" symbol1="%" caption1="Clickthrough Rate"
                colour2="#32cd32" amount2="60" symbol2="+" caption2="Downloads"
                colour3="#32cd32" amount3="20" symbol3="+" caption3="Active Users"
                colour4="#32cd32" amount4="60" symbol4="+" caption4="Downloads"
                />
            </div>

            <div className='textLens__dashboard'>
                <DashboardSample colour="#32cd32" bgcolor="#ecffec" bgImage="to right,#9ef19e, #aef5ad, #bdf8bd, #ccfccc, #dbffdb"/>
            </div>

            <TrustedClients heading="Hassle free integration with your existing tools"/>

            <div className='textLens__products'>
                <Products buttoncolor="#32cd32" heading="How AI enhances Customer Experience"/>
            </div>

            {/* <div className='textLens__action'>
                <Textaction bColor="#32cd32"/>
            </div> */}

            <div className="textLens__adv">
                <Advertisement 
                buttoncolor="#32cd32" imageLeft={adleft} imageRight={adright}/>
            </div>

            <Footer/>

        </div>
    )
}

export default Textlens
