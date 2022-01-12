import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import banner2 from '../../images/banner2.png';
import './QualityWorks.css';

function QualityWorks() {
    return (
        <div className="qualityWorks">
            <Navbar/>
            <Banner bannerImage={banner2} buttonColor="#0070c0"/>
        </div>
    )
}

export default QualityWorks
