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

function HomePage() {
    return (
        <div className="homePage">
            <Navbar/>
            <Banner bannerImage={Homebanner} buttonColor="#000000"/>
            <Customers/>
            <TrustedClients heading="Trusted by Customer Obsessed Clients"/>
            <Services/>

            <Stats 
            colour1="#0070c0" amount1="20" symbol1="%" caption1="Clickthrough Rate"
            colour2="#ffcd3a" amount2="60" symbol2="+" caption2="Downloads"
            colour3="#32cd32" amount3="20" symbol3="+" caption3="Active Users"
            colour4="#ff0066" amount4="60" symbol4="+" caption4="Downloads"
            />

            <TrustedClients heading="Hassle free integration with your existing tools"/>
            <Products/>
            <div className="homepage__adv">
                <Advertisement/>
            </div>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default HomePage
