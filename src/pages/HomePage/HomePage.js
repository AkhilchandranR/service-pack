import React from 'react';
import Banner from '../../components/Banner/Banner';
import Customers from '../../components/Customers/Customers';
import Navbar from '../../components/Navbar/Navbar';
import Services from '../../components/Services/Services';
import TrustedClients from '../../components/TrustedClients/TrustedClients';
import './HomePage.css';

function HomePage() {
    return (
        <div className="homePage">
            <Navbar/>
            <Banner/>
            <Customers/>
            <TrustedClients/>
            <Services/>
        </div>
    )
}

export default HomePage
