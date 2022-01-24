import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import aboutbanner from '../../images/aboutbanner.svg';
import about3 from '../../images/about3.svg';
import about2 from '../../images/about2.svg';
import rocket from '../../images/rocket.png';
import adleft from '../../images/adleftblack.svg';
import adright from '../../images/adrightblack.svg';
import './About.css';
import Footer from '../../components/Footer/Footer';
import Advertisement from '../../components/Advertisement/Advertisement';

function About() {
    return (
        <div className='about'>
            <Navbar/>
            <Banner 
            bannerImage={aboutbanner} buttonColor="#000000" 
            heading="Our vision statement our vision statement our vision"/>

            <div className='container'>
                <div className='about__sectionOne'>
                    <img src={about3} alt="who we are"/>
                    <div className='about__sectionOneHeading'>
                        <h1>
                            Who we are ? Who we are ? Who we are ?
                            <img src={rocket} alt="rocket"/> 
                        </h1>
                        <p className="aboutOne__subCaption">Our cognitive AI suit helps understand your customers
                         well and nurture them across all channels</p>
                        <button>Let's Talk</button>
                    </div>
                </div>
                <div className='about__sectionTwo'>
                    <div className='about__sectionOneHeading'>
                        <h1>
                            What we do ? What we do ? What we do ?
                            <img src={rocket} alt="rocket"/> 
                        </h1>
                        <p className="aboutOne__subCaption">Our cognitive AI suit helps understand your customers
                         well and nurture them across all channels</p>
                        <button>Let's Talk</button>
                    </div>
                    <img src={about2} alt='what we do'/>
                </div>                    
            </div>
            <Advertisement buttoncolor="black" imageLeft={adleft} imageRight={adright}/>
            <Footer/>
        </div>
    )
}

export default About