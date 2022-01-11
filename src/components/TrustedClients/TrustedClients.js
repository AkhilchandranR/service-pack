import { Container } from '@mui/material';
import React from 'react';
import './TrustedClients.css';
import buzzfeed from '../../images/buzzfeed.png';
import hexatech from '../../images/hexatech.png';
import indeed from '../../images/indeed.png';
import mode from '../../images/mode.png';
import stripe from '../../images/stripe.png';
import typeform from '../../images/typeform.png'; 

function TrustedClients({heading}) {
    return (
        <Container>
            <div className="trustedClients">
                <h1>{heading}</h1>
                <div className="trustedClients__clients">
                    <img src={buzzfeed} alt="buzzfeed"/>
                    <img src={hexatech} alt="hexatech"/>
                    <img src={indeed} alt="indeed"/>
                    <img src={mode} alt="mode"/>
                    <img src={typeform} alt="typeform"/>
                    <img src={stripe} alt="stripe"/>
                </div>
            </div>
        </Container>
    )
}

export default TrustedClients
