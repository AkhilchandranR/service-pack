import React from 'react';
import './Advertisement.css';
import adleft from '../../images/adleft.png';
import adright from '../../images/adright.png';
import { Container } from '@mui/material';

function Advertisement() {
    return (
        <Container>
            <div className="advertisement"> 
                <img src={adleft} alt="girl-on-a-rocket"/>
                <div className="advertisement__description">
                    <h1>Ready to Start ?</h1>
                    <p>Footer call to action description Footer call to action description Footer call to action description</p>
                    <button>Request for a Demo</button>
                </div>
                <img src={adright} alt="futureai"/>
            </div>
        </Container>
    )
}

export default Advertisement
