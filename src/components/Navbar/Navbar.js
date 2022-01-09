import { Container } from '@mui/material';
import React from 'react';
import './Navbar.css';
import Logo from '../../images/logo.png';

function Navbar() {
    return (
        <div className="navbar">
            <Container maxWidth="xl">
                <div className="navbar__container">
                    <div className="navbar__logo">
                        <img src={Logo} alt="service-pack-ai"/>
                    </div>
                    <div className="navbar__navLinks">
                        kkkkk
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navbar
