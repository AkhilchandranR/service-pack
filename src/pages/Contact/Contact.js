import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import contactbanner from '../../images/contactbanner.svg';
import './Contact.css';

function Contact() {
    return (
        <div className='contact'>
            <Navbar/>
            <Banner
            bannerImage={contactbanner} buttonColor="#000000"
            heading="A title about our locations a title about"/>
        </div>
    )
}

export default Contact
