import React from 'react';
import Banner from '../../components/Banner/Banner';
import Customers from '../../components/Customers/Customers';
import Navbar from '../../components/Navbar/Navbar';
import TrustedClients from '../../components/TrustedClients/TrustedClients';
import './HomePage.css';

function HomePage() {
    return (
        <div className="homePage">
            <Navbar/>
            <Banner/>
            <Customers/>
            <TrustedClients/>
        </div>
    )
}

export default HomePage
