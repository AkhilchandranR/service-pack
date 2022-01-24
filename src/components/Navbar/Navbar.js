import React,{ useState } from 'react';
import './Navbar.css';
import Logo from '../../images/logo.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

function Navbar() {
    const[openDropDown,setOpenDropDown] = useState(false);
    const[openMenu,setOpenMenu] =  useState(false);

    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar__container">
                    <div className="navbar__logo">
                        <img src={Logo} alt="service-pack-ai"/>
                    </div>
                    <ul className="navbar__navLinks" onClick={()=>setOpenMenu(!openMenu)}>
                        <div className="navbar__link">
                            <li>Products</li>
                            <ArrowDropDownIcon/>
                        </div>
                        <div className="navbar__link">
                            <li>Solutions</li>
                            <ArrowDropDownIcon/>
                        </div>
                        <div className="navbar__link">
                            <li>Platform</li>
                        </div>
                        <div className="navbar__link">
                            <li>Company</li>
                            <ArrowDropDownIcon/>
                        </div>
                        <div className="navbar__link">
                            <li>Resources</li>
                            <ArrowDropDownIcon/>
                        </div>
                        <button className="navbar__demo">Get a Demo</button>

                        {openMenu &&
                        <Fade>
                         <div className="navbar__dropdownMenu">
                         <div className='navbar__dropdownLinks'>
                             <h4><u>Products</u></h4>
                             <Link to="/qualityworks">
                                 <p>Quality Works</p>
                             </Link>
                             <Link to="/smartbot">
                                 <p>Smart Bot</p>
                             </Link>
                             <Link to="/voicedesk">
                                 <p>Voice Desk</p>
                             </Link>
                             <Link to="/textlens">
                                 <p>Text Lens</p>
                             </Link>
                         </div>
                         <div className='navbar__dropdownLinks'>
                             <h4><u>Solutions</u></h4>
                             <Link to="/solutions">
                                 <p>Customer Experience(CX)</p>
                             </Link>
                             <Link to="/solutions">
                                 <p>Employee Experience(EX)</p>
                             </Link>
                             <Link to="/solutions">
                                 <p>Operational Experience</p>
                             </Link>                            
                         </div>
                         <div className='navbar__dropdownLinks'>
                             <h4><u>Platform</u></h4>
                             <Link to="/platform">
                                 <p>Platform</p>
                             </Link>                            
                         </div>
                         <div className='navbar__dropdownLinks'>
                             <h4><u>Company</u></h4>
                             <Link to="/about">
                                 <p>About us</p>
                             </Link>
                             <Link to="/careers">
                                 <p>Careers</p>
                             </Link>
                             <Link to="/contact">
                                 <p>Contact us</p>
                             </Link>
                             <Link to="/support">
                                 <p>Support</p>
                             </Link>
                         </div>
                         <div className='navbar__dropdownLinks'>
                             <h4><u>Resources</u></h4>
                             <Link to="/blog">
                                 <p>Blog</p>
                             </Link>
                             <Link to="/">
                                 <p>Media</p>
                             </Link>
                         </div>
                     </div>
                     </Fade>
                         }

                        
                    </ul>

                    {/* menu link in tab/mobile view */}

                    <div className="navbar__burgerMenu" onClick={()=>setOpenDropDown(!openDropDown)}>
                        <MenuIcon/>
                    </div>
                    {openDropDown &&
                        <Fade top>
                        <div className="navbar__dropdown">
                            <div className="navbar__dropLink">
                                <li>Products</li>
                                <ArrowDropDownIcon/>
                            </div>

                            <div className="navbar__dropLink">
                                <li>Features</li>
                                <ArrowDropDownIcon/>
                            </div>
                            <div className="navbar__dropLink">
                                <li>Platform</li>
                            </div>
                            <div className="navbar__dropLink">
                                <li>Company</li>
                                <ArrowDropDownIcon/>
                            </div>
                            <div className="navbar__dropLink">
                                <li>Resources</li>
                                <ArrowDropDownIcon/>
                            </div>
                            <button className="navbar__dropDemo">Get a Demo</button>
                        </div> 
                        </Fade>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
