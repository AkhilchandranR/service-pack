import React,{ useState } from 'react';
import './Navbar.css';
import Logo from '../../images/logo.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import { Fade } from 'react-reveal';
import { Link } from 'react-router-dom';
import qwicon from '../../images/qwicon.png';
import smartbot from '../../images/smartbot.png';
import voicedesk from '../../images/voice.png';
import textlens from '../../images/lens.png';
import customer from '../../images/customer.png';
import operation from '../../images/operational.png';
import employee from '../../images/employee.png'; 
import about from '../../images/aboutus.png';
import career from '../../images/career.png';
import contact from '../../images/contact.png';
import support from '../../images/support.png';
import media from '../../images/mediaicon.png';
import blog from '../../images/blogicon.png';

function Navbar() {
    const[openDropDown,setOpenDropDown] = useState(false);
    const[openProducts,setOpenProducts] = useState(false);
    const[openSolutions,setOpenSolutions] = useState(false);
    const[openCompany,setOpenCompany] = useState(false);
    const[openResources,setOpenResources] = useState(false);

    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar__container">
                    <div className="navbar__logo">
                        <img src={Logo} alt="service-pack-ai"/>
                    </div>
                    <ul className="navbar__navLinks">
                        <div className="navbar__link" onClick={()=>setOpenProducts(!openProducts)}>
                            <li>Products</li>
                            <ArrowDropDownIcon/>
                            {openProducts && 
                                    <Fade>
                                    <div className='navbar__dropdownProducts'>
                                        <Link to="/qualityworks">
                                            <div className='navbar__menuItem'>
                                                <img src={qwicon} alt="icon"/>
                                                <p>Quality Works</p>
                                            </div>
                                        </Link>
                                        <Link to="/smartbot">
                                            <div className='navbar__menuItem'>
                                                <img src={smartbot} alt="icon"/>
                                                <p>Smart Bot</p>
                                            </div>
                                        </Link>
                                        <Link to="/voicedesk">
                                            <div className='navbar__menuItem'>
                                                <img src={voicedesk} alt="icon"/>
                                                <p>Voice Desk</p>
                                            </div>
                                        </Link>
                                        <Link to="/textlens">
                                            <div className='navbar__menuItem'>
                                                <img src={textlens} alt="icon"/>
                                                <p>Text Lens</p>
                                            </div>
                                        </Link>
                                    </div>
                                </Fade>
                            }
                        </div>
                        <div className="navbar__link" onClick={()=>setOpenSolutions(!openSolutions)}>
                            <li>Solutions</li>
                            <ArrowDropDownIcon/>
                            {openSolutions && 
                                    <Fade>
                                    <div className='navbar__dropdownProducts'>
                                        <Link to="/solutions">
                                            <div className='navbar__menuItem'>
                                                <img src={customer} alt="icon"/>
                                                <p>Customer Experience(CX)</p>
                                            </div>
                                        </Link>
                                        <Link to="/solutions">
                                            <div className='navbar__menuItem'>
                                                <img src={employee} alt="icon"/>
                                                <p>Employee Experience(EX)</p>
                                            </div>
                                        </Link>
                                        <Link to="/solutions">
                                            <div className='navbar__menuItem'>
                                                <img src={operation} alt="icon"/>
                                                <p>Operational Experience</p>
                                            </div>
                                        </Link>
                                    </div>
                                </Fade>
                            }
                        </div>
                        <div className="navbar__link">
                            <Link to="/platform">
                                <li>Platform</li>
                            </Link>
                        </div>
                        <div className="navbar__link" onClick={()=>setOpenCompany(!openCompany)}>
                            <li>Company</li>
                            <ArrowDropDownIcon/>
                            {openCompany && 
                                    <Fade>
                                    <div className='navbar__dropdownProducts'>
                                        <Link to="/about">
                                            <div className='navbar__menuItem'>
                                                <img src={about} alt="icon"/>
                                                <p>About us</p>
                                            </div>
                                        </Link>
                                        <Link to="/careers">
                                            <div className='navbar__menuItem'>
                                                <img src={career} alt="icon"/>
                                                <p>Careers</p>
                                            </div>
                                        </Link>
                                        <Link to="/contact">
                                            <div className='navbar__menuItem'>
                                                <img src={contact} alt="icon"/>
                                                <p>Contact Us</p>
                                            </div>
                                        </Link>
                                        <Link to="/support">
                                            <div className='navbar__menuItem'>
                                                <img src={support} alt="icon"/>
                                                <p>Support</p>
                                            </div>
                                        </Link>
                                    </div>
                                </Fade>
                            }
                        </div>
                        <div className="navbar__link" onClick={()=>setOpenResources(!openResources)}>
                            <li>Resources</li>
                            <ArrowDropDownIcon/>
                            {openResources && 
                                    <Fade>
                                    <div className='navbar__dropdownProducts'>
                                        <Link to="/blog">
                                            <div className='navbar__menuItem'>
                                                <img src={blog} alt="icon"/>
                                                <p>Blog</p>
                                            </div>
                                        </Link>
                                        <Link to="/">
                                            <div className='navbar__menuItem'>
                                                <img src={media} alt="icon"/>
                                                <p>Media</p>
                                            </div>
                                        </Link>
                                    </div>
                                </Fade>
                            }
                        </div>
                        <button className="navbar__demo">Get a Demo</button>
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
