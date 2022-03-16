import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import QwBanner from '../../components/Banner/QwBanner/QwBanner';
import Stats from '../../components/Stats/Stats';
import TrustedClients from '../../components/TrustedClients/TrustedClients';
import Advertisement from '../../components/Advertisement/Advertisement';
import Products from '../../components/Products/Products';
import Footer from '../../components/Footer/Footer';
import banner2 from '../../images/banner2.svg';
import adleftblue from '../../images/adleftblue.svg';
import adright from '../../images/adrightblue.svg';
import vector from '../../images/qwvector.svg';

import './QualityWorks.css';
import DashboardSample from '../../components/DashboardSample/DashboardSample';

function QualityWorks() {
    return (
        <div className="qualityWorks">
            <Navbar/>

            <QwBanner
            bannerImage={banner2} buttonColor="#0070c0"
            heading="Enabling 100% call sampling with Conversational Intelligence Platform, powered by AI."
            caption="────  CX to the power of AI" vector={vector}/>

            <div className='qualityworks__stats'>
                <Stats 
                colour1="#0070c0" amount1="25" symbol1="%" caption1="Increase in revenue"
                colour2="#0070c0" amount2="35" symbol2="%" caption2="Increase in Avg. response time"
                colour3="#0070c0" amount3="40" symbol3="%" caption3="Reduction in AHT"
                colour4="#0070c0" amount4="45" symbol4="%" caption4="Increase in First Contact Resolution"
                colour5="#0070c0" amount5="55" symbol5="%" caption5="Reduction in Operational Cost"
                />
            </div>

            <div className='qualityworks__dashboard'>
                <DashboardSample colour="#0070C0" bgcolor="#f4fbff" bgImage="to right, #bddff6,#c6e4f8,#cfe9fa,#d8eefd,#e1f3ff"
                heading1="Quality Scoring" caption1="100% calls evaluation with CQ (Call Quality) Score.  
                All the calls would be evaluated and given with Call Quality (CQ) Score."
                heading2="Audit Automation" caption2="Automated Customized business KPIs & Audit reports."
                heading3="Reporting" caption3="Instant multi-level(Org/Team/Agent) reports with single click download."/>
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
