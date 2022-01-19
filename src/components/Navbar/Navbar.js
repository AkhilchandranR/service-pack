import React,{ useState } from 'react';
import './Navbar.css';
import Logo from '../../images/logo.png';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import MenuIcon from '@mui/icons-material/Menu';
import Fade from 'react-reveal/Fade';

function Navbar() {
    const[openDropDown,setOpenDropDown] = useState(false);

    return (
        <div className="navbar">
            <div className="container">
                <div className="navbar__container">
                    <div className="navbar__logo">
                        <img src={Logo} alt="service-pack-ai"/>
                    </div>
                    <ul className="navbar__navLinks">
                        <div className="navbar__link">
                            <li>Products</li>
                            <ArrowDropDownIcon/>
                        </div>
                        <div className="navbar__link">
                            <li>Features</li>
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
