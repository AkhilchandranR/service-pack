import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner2 from '../../components/Banner/VdBanner/VdBanner';
import Stats from '../../components/Stats/Stats';
import DashboardSample from '../../components/DashboardSample/DashboardSample';
import TrustedClients from '../../components/TrustedClients/TrustedClients';
import Products from '../../components/Products/Products';
import Advertisement from '../../components/Advertisement/Advertisement';

import adleft from '../../images/adleftyello.svg';
import adright from '../../images/adrightyellow.svg';

import vector from '../../images/vdvector.svg';

import Footer from '../../components/Footer/Footer';
import banner4 from '../../images/banner4.svg';
import './VoiceDesk.css';
import VoicedeskAction from '../../components/VoicedeskAction/VoicedeskAction';

function VoiceDesk() {
    return (
        <div className='voiceDesk'>
            <Navbar/>
            <Banner2 
            bannerImage={banner4} buttonColor="#ffbf00"
            heading="Ensuring zero response time with Conversational IVR."
            caption="────  CX to the power of AI" vector={vector}/>

            <div className='voiceDesk__stats'>
                <Stats 
                colour1="#ffbf00" amount1="25" symbol1="%" caption1="Increase in revenue"
                colour2="#ffbf00" amount2="35" symbol2="%" caption2="Increase in Avg. response time"
                colour3="#ffbf00" amount3="40" symbol3="%" caption3="Reduction in AHT"
                colour4="#ffbf00" amount4="45" symbol4="%" caption4="Increase in First Contact Resolution"
                colour5="#ffbf00" amount5="55" symbol5="%" caption5="Reduction in Operational Cost"
                />
            </div>

            <div className='voiceDesk__dashboard'>
                <DashboardSample colour="#ffbf00" bgcolor="#fff8e2" bgImage="to right,  #f1d993, #f5e0a4, #f8e7b4, #fceec5, #fff5d6"
                heading1="Automated Service Desk" caption1="Appointment Bookings, Reservations," 
                heading2="Availability & Scalability" caption2="100% uptime and scalable as per business requirements." 
                heading3="Integration" caption3="Hassle free integration into existing tools."/>
            </div>

            <TrustedClients heading="Hassle free integration with your existing tools"/>

            <div className='voiceDesk__products'>
                <Products buttoncolor="#ffbf00" heading="How AI enhances Customer Experience"/>
            </div>

            {/* <div className='voiceDesk__action'>
                <VoicedeskAction/>
            </div> */}

            <div className="voiceDesk__adv">
                <Advertisement 
                buttoncolor="#ffbf00" imageLeft={adleft} imageRight={adright}/>
            </div>

            <Footer/>

        </div>
    )
}

export default VoiceDesk
