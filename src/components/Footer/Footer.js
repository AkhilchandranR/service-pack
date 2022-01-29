import React from 'react';
import './Footer.css';
import footerlogo from '../../images/logo.svg';
import sphere from '../../images/sphere.svg';
import YouTubeIcon from '@mui/icons-material/YouTube';
import facebook from '../../images/facebook.png';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Link } from 'react-router-dom';


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
                    <div className='footer__logoContainer'>
                        <img src={footerlogo} alt="footer logo" className='footer__logo'/>
                        <p>The pursuit of happy customers</p>
                    </div>
                    <img className="footer__sphere" src={sphere} alt="sphere"/>
                    <div className="footer__products">
                        <p className="footer__heading">Products</p>
                        <p className="footer__headingUnderline">•───────</p>
                        <Link to="/qualityworks">
                            <p className="footer__content">Quality Work</p>
                        </Link>
                        <Link to="/smartbot">
                            <p className="footer__content">Smart Bot</p>
                        </Link>
                        <Link to="/voicedesk">
                            <p className="footer__content">Voice Desk</p>
                        </Link>
                        <Link to="/textlens">
                            <p className="footer__content">Text Lens</p>
                        </Link>
                    </div>
                    <div className="footer__products">
                        <p className="footer__heading">Comapany</p>
                        <p className="footer__headingUnderline">•───────</p>
                        <Link to="/about">
                            <p className="footer__content">About Us</p>
                        </Link>
                        <Link to="/support">
                            <p className="footer__content">Support</p>
                        </Link>
                        <Link to="/">
                            <p className="footer__content">Locations</p>
                        </Link>
                    </div>
                    <div className="footer__products">
                        <p className="footer__heading">Information</p>
                        <p className="footer__headingUnderline">•───────</p>
                        <Link to="/">
                            <p className="footer__content">Home</p>
                        </Link>
                        <Link to="/platform">
                            <p className="footer__content">Platform</p>
                        </Link>
                        <Link to="/">
                            <p className="footer__content">Company</p>
                        </Link>
                        <Link to="/support">
                            <p className="footer__content">Support</p>
                        </Link>
                    </div>
                    <div className="footer__products">
                        <p className="footer__heading">Contact Us</p>
                        <p className="footer__headingUnderline">•───────</p>
                        <Link to="/contact">
                            <p className="footer__content">hello@servicepack.ai</p>
                        </Link>
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
