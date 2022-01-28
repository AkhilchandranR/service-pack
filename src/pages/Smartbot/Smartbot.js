import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner2 from '../../components/Banner2/Banner2';
import Stats from '../../components/Stats/Stats';
import DashboardSample from '../../components/DashboardSample/DashboardSample';
import TrustedClients from '../../components/TrustedClients/TrustedClients';
import Products from '../../components/Products/Products';
import banner3 from '../../images/banner3.svg';
import './Smartbot.css';
import Chatbotaction from '../../components/Chatbotaction/Chatbotaction';
import Advertisement from '../../components/Advertisement/Advertisement';
import adleft from '../../images/adleftpink.svg';
import adright from '../../images/adrightpink.svg';
import Footer from '../../components/Footer/Footer';
import vector from '../../images/smvector.svg';

function Smartbot() {
    return (
        <div className='smartbot'>
            <Navbar/>
            <Banner2 
            bannerImage={banner3} buttonColor="#ff0066"
            heading="Empowering Customer Experience with Artificial Intelligence ."
            caption="────  CX to the power of AI" vector={vector}/>

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
            <div className='smartbot__products'>
                <Products buttoncolor="#ff0066" heading="How AI enhances Customer Experience"/>
            </div>

            {/* <div className="smartbot__chatbot">
                <div className='chatbot_dots sb_one'></div>
                <div className='chatbot_dots sb_two'></div>
                <div className='chatbot_dots sb_three'></div>
                <div className='chatbot_dots sb_four'></div>
                <div className='chatbot_dots sb_five'></div>
                <div className='chatbot_dots sb_six'></div>
                <div className='chatbot_dots sb_seven'></div>
                <div className='chatbot_dots sb_eight'></div>
                <div className='chatbot_dots sb_nine'></div>
                <div className='chatbot_dots sb_ten'></div>
                <div className='chatbot_dots sb_eleven'></div>
                <div className='chatbot_dots sb_twelve'></div>
                <div className='chatbot_dots sb_thirteen'></div>
                <div className='chatbot_dots sb_fourteen'></div>
                <div className='chatbot_dots sb_fifteen'></div>
                <div className='chatbot_dots sb_sixteen'></div>
                <Chatbotaction/>
            </div> */}

            <div className="smartbot__adv">
                <Advertisement 
                buttoncolor="#ff0066" imageLeft={adleft} imageRight={adright}/>
            </div>

            <Footer/>
        </div>
    )
}

export default Smartbot
