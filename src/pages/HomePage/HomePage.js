import React from 'react';
import Banner from '../../components/Banner/Banner';
import CallDemo from '../../components/CallDemo/CallDemo';
import Customers from '../../components/Customers/Customers';
import Navbar from '../../components/Navbar/Navbar';
import Services from '../../components/Services/Services';
import TrustedClients from '../../components/TrustedClients/TrustedClients';
import Stats from '../../components/Stats/Stats';
import './HomePage.css';
import Products from '../../components/Products/Products';
import Advertisement from '../../components/Advertisement/Advertisement';

function HomePage() {
    return (
        <div className="homePage">
            <Navbar/>
            <Banner/>
            <Customers/>
            <TrustedClients heading="Trusted by Customer Obsessed Clients"/>
            <Services/>
            <CallDemo/>
            <Stats/>
            <TrustedClients heading="Hassle free integration with your existing tools"/>
            <Products/>
            <Advertisement/>
        </div>
    )
}

export default HomePage
