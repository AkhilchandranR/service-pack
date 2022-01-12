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
import Homebanner from '../../images/homebanner.png';

function HomePage() {
    return (
        <div className="homePage">
            <Navbar/>
            <Banner bannerImage={Homebanner} buttonColor="#000000"/>
            <Customers/>
            <TrustedClients heading="Trusted by Customer Obsessed Clients"/>
            <Services/>
            <Stats/>
            <TrustedClients heading="Hassle free integration with your existing tools"/>
            <Products/>
            <Advertisement/>
            <Footer/>
        </div>
    )
}

export default HomePage
