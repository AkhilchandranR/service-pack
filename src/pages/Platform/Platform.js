import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner3 from '../../components/Banner3/Banner3';
import Stats from '../../components/Stats/Stats';
import DashboardSample from '../../components/DashboardSample/DashboardSample';
import Tools from '../../components/Tools/Tools';
import Products from '../../components/Products/Products';
import Advertisement from '../../components/Advertisement/Advertisement';

import adleft from '../../images/adleftviolet.svg';
import adright from '../../images/adrightviolet.svg';

import Footer from '../../components/Footer/Footer';
import banner6 from '../../images/banner6.svg';
import './Platform.css';
import Textaction from '../../components/Textaction/Textaction';
import vector from '../../images/pvector.svg';

function Platform() {
    return (
        <div className='platform'>
            <Navbar/>
            <Banner3
            bannerImage={banner6} buttonColor="#7030a0"
            heading="A good product brings you customers, but a great customer experience retains them."
            vector={vector}/>

            <div className='platform__stats'>
                <Stats 
                colour1="#7030a0" amount1="25" symbol1="%" caption1="Increase in revenue"
                colour2="#7030a0" amount2="35" symbol2="%" caption2="Increase in Avg. response time"
                colour3="#7030a0" amount3="40" symbol3="%" caption3="Reduction in AHT"
                colour4="#7030a0" amount4="45" symbol4="%" caption4="Increase in First Contact Resolution"
                colour5="#7030a0" amount5="55" symbol5="%" caption5="Reduction in Operational Cost"
                />
            </div>

            <div className='platform__dashboard'>
                <DashboardSample colour="#7030a0" bgcolor="#f7ecff" bgImage="to right, #d7b1f4, #debdf7, #e5c9fa, #ebd5fc, #f2e1ff"/>
            </div>

            <Tools heading="Hassle free integration with your existing tools"/>

            <div className='platform__products'>
                <Products buttoncolor="#7030a0" heading="How AI enhances Customer Experience"/>
            </div>

            {/* <div className='platform__action'>
                <Textaction bColor="#7030a0"/>
            </div> */}

            <div className="platform__adv">
                <Advertisement 
                buttoncolor="#7030a0" imageLeft={adleft} imageRight={adright}/>
            </div>

            <Footer/>
        </div>
    )
}

export default Platform
