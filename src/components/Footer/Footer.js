import React from 'react';
import './Footer.css';
import footerlogo from '../../images/footerlogo.png';
import sphere from '../../images/sphere.svg';
import YouTubeIcon from '@mui/icons-material/YouTube';
import facebook from '../../images/facebook.png';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';


function Footer() {
    return (
        <div className="footer">
            <div className="footer__dots f_one"></div>
            <div className="footer__dots f_two"></div>
            <div className="footer__dots f_three"></div>
            <div className="footer__dots f_four"></div>
            <div className="footer__dots f_five"></div>
            <div className="footer__dots f_six"></div>
            <div className="footer__dots f_seven"></div>
            <div className="container">
                <div className="footer__container">
                    <img src={footerlogo} alt="footer logo"/>
                    <img className="footer__sphere" src={sphere} alt="sphere"/>
                    <div className="footer__products">
                        <p className="footer__heading">Products</p>
                        <p className="footer__headingUnderline">•───────</p>
                        <p className="footer__content">Quality Work</p>
                        <p className="footer__content">Smart bot</p>
                        <p className="footer__content">Voice desk</p>
                        <p className="footer__content">Text Lens</p>
                    </div>
                    <div className="footer__products">
                        <p className="footer__heading">Comapany</p>
                        <p className="footer__headingUnderline">•───────</p>
                        <p className="footer__content">About Us</p>
                        <p className="footer__content">Support</p>
                        <p className="footer__content">Locations</p>
                    </div>
                    <div className="footer__products">
                        <p className="footer__heading">Information</p>
                        <p className="footer__headingUnderline">•───────</p>
                        <p className="footer__content">Home</p>
                        <p className="footer__content">Platform</p>
                        <p className="footer__content">Comapny</p>
                        <p className="footer__content">Support</p>
                    </div>
                    <div className="footer__products">
                        <p className="footer__heading">Contact Us</p>
                        <p className="footer__headingUnderline">•───────</p>
                        <p className="footer__content">hello@servicepack.ai</p>
                        <div className="footer__socialmedia">
                            <div className="footer__socialIconFacebook">
                                <img src={facebook} alt="facebook"/>
                            </div>
                            <div className="footer__socialIcon">
                                <InstagramIcon/>
                            </div>
                            <div className="footer__socialIcon">
                                <TwitterIcon/>
                            </div>
                            <div className="footer__socialIcon">
                                <YouTubeIcon/>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="footer__copyright">Copyright © Service Pack, Inc</p>
            </div>
        </div>
    )
}

export default Footer
