import React,{ useState,useEffect,useRef } from 'react';
import './Navbar.css';
import Logo from '../../images/logo_white.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import { Fade } from 'react-reveal';
import { Slide } from 'react-reveal';
import { Link } from 'react-router-dom';
import qwicon from '../../images/Quality_Works_Logo.svg';
import smartbot from '../../images/Smart_Bot_Logo.svg';
import voicedesk from '../../images/Voice_Desk_Logo.svg';
import textlens from '../../images/Text_Lens_Logo.svg';
import coco from '../../images/CoCo_Bot_Logo.svg';
import { openModal } from '../../redux/rootReducer';
import { useDispatch } from 'react-redux';


function Navbar() {
    const menuRef = useRef();
    const dispatch = useDispatch();

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

    //click outside to close menu
    useEffect(() => {
        const closeDropDowns = (e) =>{
            if(e.path[2].className !== 'navbar__navLinks'){
                setOpenProducts(false);
                setOpenResources(false);
                setOpenSolutions(false);
                setOpenCompany(false);
            }
        }
        document.body.addEventListener('click', closeDropDowns);

        //unsubscribe the effect...
        return ()=> document.body.removeEventListener('click',closeDropDowns)
    }, []);
    

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
                    <ul className="navbar__navLinks" ref={menuRef}>
                        <div className="navbar__link" onClick={handleProducts}>
                            <li>Products</li>
                            <ArrowDropDownIcon/>
                            {openProducts && 
                                    <div className='navbar__dropdownProducts'>
                                        <Link to="/qualityworks">
                                            <div className='navbar__menuItem'>
                                                <img src={qwicon} alt="icon"/>
                                                <div className='navbar__itemDesc'>
                                                    <p>Quality Works</p>
                                                    <p>Conversational Intelligence Platform</p>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="/smartbot">
                                            <div className='navbar__menuItem'>
                                                <img src={smartbot} alt="icon"/>
                                                <div className='navbar__itemDesc'>
                                                    <p>Smart Bot</p>
                                                    <p>Conversational AI Bot</p>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="/voicedesk">
                                            <div className='navbar__menuItem'>
                                                <img src={voicedesk} alt="icon"/>
                                                <div className='navbar__itemDesc'>
                                                    <p>Voice Desk</p>
                                                    <p>Conversational IVR</p>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="/textlens">
                                            <div className='navbar__menuItem'>
                                                <img src={textlens} alt="icon"/>
                                                <div className='navbar__itemDesc'>
                                                    <p>Text Lens</p>
                                                    <p>Text Analytics Platform</p>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="/coco">
                                            <div className='navbar__menuItem'>
                                                <img src={coco} alt="icon"/>
                                                <div className='navbar__itemDesc'>
                                                    <p>CoCo</p>
                                                    <p>Contactless Biometric Bot</p>
                                                </div>
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
                                                <p>Customer Experience (CX)</p>
                                            </div>
                                        </Link>
                                        <Link to="/employee-experience">
                                            <div className='navbar__menuItem'>
                                                <p>Employee Experience (EX)</p>
                                            </div>
                                        </Link>
                                        <Link to="/operational-experience">
                                            <div className='navbar__menuItem'>
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
                        <button className="navbar__demo" onClick={()=>dispatch(openModal())}>Request for Demo</button>
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
                            </div>
                            {openproducts && <Slide>
                                    <div className='navbar__dropdownProductsMobile'>
                                        <Link to="/qualityworks">
                                            <div className='navbar__menuItem'>
                                                <img src={qwicon} alt="icon"/>
                                                <div className='navbar__itemDesc'>
                                                    <p>Quality Works</p>
                                                    <p>Conversational Intelligence Platform</p>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="/smartbot">
                                            <div className='navbar__menuItem'>
                                                <img src={smartbot} alt="icon"/>
                                                <div className='navbar__itemDesc'>
                                                    <p>Smart Bot</p>
                                                    <p>Conversational AI Bot</p>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="/voicedesk">
                                            <div className='navbar__menuItem'>
                                                <img src={voicedesk} alt="icon"/>
                                                <div className='navbar__itemDesc'>
                                                    <p>Voice Desk</p>
                                                    <p>Conversational IVR</p>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="/textlens">
                                            <div className='navbar__menuItem'>
                                                <img src={textlens} alt="icon"/>
                                                <div className='navbar__itemDesc'>
                                                    <p>Text Lens</p>
                                                    <p>Text Analytics Platform</p>
                                                </div>
                                            </div>
                                        </Link>
                                        <Link to="/coco">
                                            <div className='navbar__menuItem'>
                                                <img src={coco} alt="icon"/>
                                                <div className='navbar__itemDesc'>
                                                    <p>CoCo</p>
                                                    <p>Contactless Biometric Bot</p>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                </Slide> }

                            <div className="navbar__dropLink" onClick={()=>setOpensolutions(!opensolutions)}>
                                <li>Features</li>
                                <ArrowDropDownIcon/>
                            </div>
                            {opensolutions && 
                                    <Fade>
                                    <div className='navbar__dropdownProductsMobile'>
                                        <Link to="/solutions">
                                            <div className='navbar__menuItem'>
                                                <p>Customer Experience(CX)</p>
                                            </div>
                                        </Link>
                                        <Link to="/solutions">
                                            <div className='navbar__menuItem'>
                                                <p>Employee Experience(EX)</p>
                                            </div>
                                        </Link>
                                        <Link to="/solutions">
                                            <div className='navbar__menuItem'>
                                                <p>Operational Experience</p>
                                            </div>
                                        </Link>
                                    </div>
                                </Fade>
                            }

                            <div className="navbar__dropLink">
                                <Link to="/platform">
                                    <li>Platform</li>
                                </Link>
                            </div>

                            <div className="navbar__dropLink" onClick={()=>setOpencompany(!opencompany)}>
                                <li>Company</li>
                                <ArrowDropDownIcon/>
                            </div>
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

                            <div className="navbar__dropLink" onClick={()=>setOpenresource(!openresource)}>
                                <li>Resources</li>
                                <ArrowDropDownIcon/>
                            </div>
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

                            <button className="navbar__dropDemo" onClick={()=>dispatch(openModal())}>Request for Demo</button>
                        </div> 
                        </Fade>
                    }
                </div>
            </div>
        </div>
    )
}

export default Navbar
