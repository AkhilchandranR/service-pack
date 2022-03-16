import React from 'react';
import Banner from '../../components/Banner/Banner';
import Customers from '../../components/Customers/Customers';
import Navbar from '../../components/Navbar/Navbar';
import Services from '../../components/Services/Services';
import TrustedClients from '../../components/TrustedClients/TrustedClients';
import Stats from '../../components/Stats/Stats';
import './HomePage.css';
import Products from '../../components/Products/Products';
import Advertisement from '../../components/Advertisement/Advertisement';
import Footer from '../../components/Footer/Footer';
import Homebanner from '../../images/homebanner.svg';
import design from '../../images/design.png';
import vector1 from '../../images/Vector01.svg';
import adleft from '../../images/adleft.svg';
import adright from '../../images/adrightblue.svg';
import bg from '../../images/bannerbackground.svg';
import SignIn from '../../components/SigninModal/SignIn';

function HomePage() {
    return (
        <div className="homePage">
            <Navbar/>

            <div className="homePage__banner">
                <img src={bg} alt="" className="homebg"/>
                <Banner 
                bannerImage={Homebanner} buttonColor="#000000" 
                vector={vector1} heading="Transforming Customer Experience with Artificial Intelligence ."
                caption="────  CX to the power of AI"/>
            </div>

            <div className="homepage__customers">
                <div className="dots yellow c_one"></div>
                <Customers/>
            </div>

            <div className="homepage__clients">
                <img src={design} alt=""/>
                <div className="dots yellow cl_one"></div>
                <div className="dots yellow cl_two"></div>
                <div className="dots yellow cl_three"></div>
                <div className="dots yellow cl_four"></div>
                <div className="dots yellow cl_five"></div>
                <div className="dots yellow cl_six"></div>
                <div className="dots green cl_seven"></div>
                <TrustedClients heading="Trusted by Customer Obsessed Clients"/>
            </div>
            
            <div className="homepage__services">
                <div className="dots yellow s_one"></div>
                <div className="dots yellow s_two"></div>
                <div className="dots yellow s_three"></div>
                <div className="dots yellow s_four"></div>
                <div className="dots yellow s_five"></div>
                <div className="dots yellow s_six"></div>
                <div className="dots yellow s_seven"></div>
                <div className="dots yellow s_eight"></div>
                <div className="dots yellow s_nine"></div>
                <div className="dots yellow s_ten"></div>
                <div className="dots yellow s_eleven"></div>
                <div className="dots green s_twelve"></div>
                <div className="dots green s_thirteen"></div>
                <div className="dots green s_fourteen"></div>
                <div className="dots green s_fifteen"></div>
                <div className="dots green s_sixteen"></div>
                <Services/>
            </div>

            <div className='homepage__stats'>
                <Stats 
                colour1="#0070c0" amount1="25" symbol1="%" caption1="Increase in revenue"
                colour2="#ffcd3a" amount2="35" symbol2="%" caption2="Increase in Avg. response time"
                colour3="#32cd32" amount3="40" symbol3="%" caption3="Reduction in AHT"
                colour4="#ff0066" amount4="45" symbol4="%" caption4="Increase in First Contact Resolution"
                colour5="#ff4500" amount5="55" symbol5="%" caption5="Reduction in Operational Cost"
                />
            </div>

            <TrustedClients heading="Hassle free integration with your existing tools"/>

            <div className='homepage__products'>
                <Products buttoncolor="black" heading="How AI enhances Customer Experience"/>
            </div>

            <div className="homepage__adv">
                <Advertisement 
                buttoncolor="black" imageLeft={adleft} imageRight={adright}/>
            </div>

            <footer>
                <Footer/>
            </footer>

            {/* <SignIn/> */}
            
        </div>
    )
}

export default HomePage
