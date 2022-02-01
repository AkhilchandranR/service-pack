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


function Navbar() {
    const[openDropDown,setOpenDropDown] = useState(false);
    const[openProducts,setOpenProducts] = useState(false);
    const[openSolutions,setOpenSolutions] = useState(false);
    const[openCompany,setOpenCompany] = useState(false);
    const[openResources,setOpenResources] = useState(false);

    //mobile versions....
    const[openproducts,setOpenproducts] = useState(false);
    const[opensolutions,setOpensolutions] = useState(false);
    const[opencompany,setOpencompany] = useState(false);
    const[openresource,setOpenresource] = useState(false);

    const handleProducts = () =>{
        setOpenProducts(!openProducts);
        setOpenResources(false);
        setOpenSolutions(false);
        setOpenCompany(false);
    }
    const handleSolutions = () =>{
        setOpenSolutions(!openSolutions);
        setOpenProducts(false);
        setOpenResources(false);
        setOpenCompany(false);
    }
    const handleResources = () =>{
        setOpenResources(!openResources);
        setOpenProducts(false);
        setOpenSolutions(false);
        setOpenCompany(false);
    }
    const handleCompany = () =>{
        setOpenCompany(!openCompany);
        setOpenProducts(false);
        setOpenResources(false);
        setOpenSolutions(false);
    }

    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar__container">
                    <div className="navbar__logo">
                        <Link to="/">
                            <img src={Logo} alt="service-pack-ai"/>
                        </Link>
                    </div>
                    <ul className="navbar__navLinks">
                        <div className="navbar__link" onClick={handleProducts}>
                            <li>Products</li>
                            <ArrowDropDownIcon/>
                            {openProducts && 
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
                                        <Link to="/">
                                            <div className='navbar__menuItem'>
                                                <img src={textlens} alt="icon"/>
                                                <p>Coco</p>
                                            </div>
                                        </Link>
                                    </div>
                            }
                        </div>
                        <div className="navbar__link" onClick={handleSolutions}>
                            <li>Solutions</li>
                            <ArrowDropDownIcon/>
                            {openSolutions && 
                                    <div className='navbar__dropdownProducts'>
                                        <Link to="/customer-experience">
                                            <div className='navbar__menuItem'>
                                                <img src={customer} alt="icon"/>
                                                <p>Customer Experience (CX)</p>
                                            </div>
                                        </Link>
                                        <Link to="/employee-experience">
                                            <div className='navbar__menuItem'>
                                                <img src={employee} alt="icon"/>
                                                <p>Employee Experience (EX)</p>
                                            </div>
                                        </Link>
                                        <Link to="/operational-experience">
                                            <div className='navbar__menuItem'>
                                                <img src={operation} alt="icon"/>
                                                <p>Operational Experience (OX)</p>
                                            </div>
                                        </Link>
                                    </div>
                            }
                        </div>
                        <div className="navbar__link">
                            <Link to="/platform">
                                <li>Platform</li>
                            </Link>
                        </div>
                        <div className="navbar__link" onClick={handleCompany}>
                            <li>Company</li>
                            <ArrowDropDownIcon/>
                            {openCompany && 
                                    <div className='navbar__dropdownProducts'>
                                        <Link to="/about">
                                            <div className='navbar__menuItem'>
                                                <p>About us</p>
                                            </div>
                                        </Link>
                                        <Link to="/careers">
                                            <div className='navbar__menuItem'>
                                                <p>Careers</p>
                                            </div>
                                        </Link>
                                        <Link to="/contact">
                                            <div className='navbar__menuItem'>
                                                <p>Contact Us</p>
                                            </div>
                                        </Link>
                                        <Link to="/support">
                                            <div className='navbar__menuItem'>
                                                <p>Support</p>
                                            </div>
                                        </Link>
                                    </div>
                            }
                        </div>
                        <div className="navbar__link" onClick={handleResources}>
                            <li>Resources</li>
                            <ArrowDropDownIcon/>
                            {openResources && 
                                    <div className='navbar__dropdownProducts'>
                                        <Link to="/blog">
                                            <div className='navbar__menuItem'>
                                                <p>Blog</p>
                                            </div>
                                        </Link>
                                        <Link to="/">
                                            <div className='navbar__menuItem'>
                                                <p>Media</p>
                                            </div>
                                        </Link>
                                    </div>
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
                            <div className="navbar__dropLink" onClick={()=>setOpenproducts(!openproducts)}>
                                <li>Products</li>
                                <ArrowDropDownIcon/>
                                {openproducts && <Fade>
                                    <div className='navbar__dropdownProductsMobile'>
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
                                        <Link to="/">
                                            <div className='navbar__menuItem'>
                                                <img src={textlens} alt="icon"/>
                                                <p>Coco</p>
                                            </div>
                                        </Link>
                                    </div>
                                </Fade> }
                                
                            </div>

                            <div className="navbar__dropLink" onClick={()=>setOpensolutions(!opensolutions)}>
                                <li>Features</li>
                                <ArrowDropDownIcon/>
                                {opensolutions && 
                                    <Fade>
                                    <div className='navbar__dropdownProductsMobile'>
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
                            <div className="navbar__dropLink">
                                <Link to="/platform">
                                    <li>Platform</li>
                                </Link>
                            </div>
                            <div className="navbar__dropLink" onClick={()=>setOpencompany(!opencompany)}>
                                <li>Company</li>
                                <ArrowDropDownIcon/>
                                {opencompany && 
                                    <Fade>
                                    <div className='navbar__dropdownProductsMobile'>
                                        <Link to="/about">
                                            <div className='navbar__menuItem'>
                                                <p>About us</p>
                                            </div>
                                        </Link>
                                        <Link to="/careers">
                                            <div className='navbar__menuItem'>
                                                <p>Careers</p>
                                            </div>
                                        </Link>
                                        <Link to="/contact">
                                            <div className='navbar__menuItem'>
                                                <p>Contact Us</p>
                                            </div>
                                        </Link>
                                        <Link to="/support">
                                            <div className='navbar__menuItem'>
                                                <p>Support</p>
                                            </div>
                                        </Link>
                                    </div>
                                </Fade>
                            }
                            </div>
                            <div className="navbar__dropLink" onClick={()=>setOpenresource(!openresource)}>
                                <li>Resources</li>
                                <ArrowDropDownIcon/>
                                {openresource && 
                                    <Fade>
                                    <div className='navbar__dropdownProductsMobile'>
                                        <Link to="/blog">
                                            <div className='navbar__menuItem'>
                                                <p>Blog</p>
                                            </div>
                                        </Link>
                                        <Link to="/">
                                            <div className='navbar__menuItem'>
                                                <p>Media</p>
                                            </div>
                                        </Link>
                                    </div>
                                </Fade>
                            }
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
