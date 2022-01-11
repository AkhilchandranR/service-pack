import { Container } from '@mui/material';
import React from 'react';
import './Banner.css';
import rocket from '../../images/rocket.png';
import Homebanner from '../../images/homebanner.png';

function Banner() {
    return (
        <div className="banner">
            <Container>
                <div className="banner__contents">
                    <div className="banner__textContent">
                        <p>────  CX to the power of AI</p>
                        <h1>
                            Empowering Customer Experience with Artificial Intelligence . 
                            <img src={rocket} alt="rocket"/> 
                        </h1>
                        <p className="banner__subCaption">Our cognitive AI suit helps understand your customers
                         well and nurture them across all channels</p>
                        <button>Let's Talk</button>
                    </div>
                    <div className="banner__image">
                        <img src={Homebanner} alt="banner"/>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Banner
