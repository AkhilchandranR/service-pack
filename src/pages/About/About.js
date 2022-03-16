import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import AboutBanner from '../../components/Banner/AboutBanner/AboutBanner';
import aboutbanner from '../../images/aboutbanner.svg';
import about3 from '../../images/about3.svg';
import about2 from '../../images/about2.svg';
import rocket from '../../images/rocket.png';
import adleft from '../../images/adleftblack.svg';
import adright from '../../images/adrightblack.svg';
import './About.css';
import Footer from '../../components/Footer/Footer';
import Advertisement from '../../components/Advertisement/Advertisement';
import vector from '../../images/aboutvector.svg';

function About() {
    return (
        <div className='about'>
            <Navbar/>
            <AboutBanner
            bannerImage={aboutbanner} buttonColor="#000000" 
            heading="Our Vision :"
            vector={vector}/>

            <div className='container'>
                <div className='about__sectionOne'>
                    <img src={about2} alt="who we are"/>
                    <div className='about__sectionOneHeading'>
                        <h1>
                            Who we are ?:
                            <img src={rocket} alt="rocket"/> 
                        </h1>
                        <p className="aboutOne__subCaption"> Group of product enthusiasts focused on
                         problem solving using leading edge AI technologies.</p>
                        <button>Let's Talk</button>
                    </div>
                </div>
                <div className='about__sectionTwo'>
                    <div className='about__sectionOneHeading'>
                        <h1>
                            What we do ?:
                            <img src={rocket} alt="rocket"/> 
                        </h1>
                        <p className="aboutOne__subCaption">(Customer/Employee/Operational) Experience with 
                        Artificial Intelligence.</p>
                        <button>Let's Talk</button>
                    </div>
                    <img src={about3} alt='what we do'/>
                </div>                    
            </div>
            <Advertisement buttoncolor="black" imageLeft={adleft} imageRight={adright}/>
            <Footer/>
        </div>
    )
}

export default About
