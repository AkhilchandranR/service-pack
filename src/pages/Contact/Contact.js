import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import ContactBanner from '../../components/Banner/ContactBanner/ContactBanner';
import Footer from '../../components/Footer/Footer';
import usa from '../../images/usa.png';
import uk from '../../images/uk.png';
import india from '../../images/india.png';
import design from '../../images/design.png';
import contactbanner from '../../images/contactbanner.svg';
import './Contact.css';

function Contact() {
    return (
        <div className='contact'>
            <img src={design} alt='bluedot' className='bluedot cr_one'/>
            <img src={design} alt='bluedot' className='bluedot cr_two'/>
            <img src={design} alt='bluedot' className='bluedot cr_three'/>

            <div className='crdots yellow cr_on'></div>
            <div className='crdots yellow cr_tw'></div>
            <div className='crdots yellow cr_thre'></div>
            <div className='crdots yellow cr_four'></div>
            <div className='crdots yellow cr_five'></div>
            <div className='crdots yellow cr_six'></div>
            <div className='crdots yellow cr_seven'></div>
            <div className='crdots yellow cr_eight'></div>
            <div className='crdots yellow cr_nine'></div>
            <div className='crdots yellow cr_ten'></div>
            <div className='crdots yellow cr_eleven'></div>
            <div className='crdots yellow cr_twelve'></div>
            <div className='crdots yellow cr_thirteen'></div>
            <div className='crdots yellow cr_fourteen'></div>
            <div className='crdots yellow cr_fifteen'></div>
            <div className='crdots yellow cr_sixteen'></div>
            <div className='crdots yellow cr_seventeen'></div>
            <div className='crdots yellow cr_eighteen'></div>
            <div className='crdots green cr_nineteen'></div>
            <div className='crdots green cr_twenty'></div>
            <div className='crdots green cr_twentyone'></div>

            <Navbar/>
            <ContactBanner
            bannerImage={contactbanner} buttonColor="#000000"
            heading="Feel free to say Hi !!"/>

            <h1 className='contact__addressHeading'>Our Presence</h1>

            <div className='contact__address'>
                <div className='contact__addressCard'>
                    <img src={usa} alt="USA"/>
                    <h1>USA</h1>
                    <p>10618 Heatherfield Dr,</p>
                    <p>Fishers,Indiana,USA-</p>
                    <p>46038</p>
                    <p>+1 (954) 336 2091</p>
                </div>
                <div className='contact__addressCard'>
                    <img src={uk} alt="UK"/>
                    <h1>UK</h1>
                    <p>Kemp house,160 City</p>
                    <p>Road, London, EC1V 2NX,</p>
                    <p>United Kingdom</p>
                    <p>+44 - 7830308859</p>
                </div>
                <div className='contact__addressCard'>
                    <img src={india} alt="india"/>
                    <h1>UK</h1>
                    <p>Kemp house,160 City</p>
                    <p>Road, London, EC1V 2NX,</p>
                    <p>United Kingdom</p>
                    <p>+44 - 7830308859</p>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Contact
