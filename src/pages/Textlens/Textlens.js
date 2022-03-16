import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import TlBanner from '../../components/Banner/TlBanner/TlBanner';
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
            <TlBanner
            bannerImage={banner5} buttonColor="#34cd32"
            heading="Elevating the voice of customers with text analytics powered by NLP."
            caption="────  CX to the power of AI" vector={vector}/>

            <div className='textlens__stats'>
                <Stats 
                colour1="#34cd32" amount1="25" symbol1="%" caption1="Increase in revenue"
                colour2="#34cd32" amount2="35" symbol2="%" caption2="Increase in Avg. response time"
                colour3="#34cd32" amount3="40" symbol3="%" caption3="Reduction in AHT"
                colour4="#34cd32" amount4="45" symbol4="%" caption4="Increase in First Contact Resolution"
                colour5="#34cd32" amount5="55" symbol5="%" caption5="Reduction in Operational Cost"
                />
            </div>

            <div className='textLens__dashboard'>
                <DashboardSample colour="#32cd32" bgcolor="#ecffec" bgImage="to right,#9ef19e, #aef5ad, #bdf8bd, #ccfccc, #dbffdb"
                heading1="Scraping Engine" caption1="Scrapes reviews from multiple sources across the internet."
                heading2="Text analytics" caption2="Analyzes collected data into actionable insights."
                heading3="CSAT" caption3="CSAT prediction based on the review intents."/>
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
