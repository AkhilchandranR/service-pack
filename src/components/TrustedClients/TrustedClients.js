import React from 'react';
import './TrustedClients.css';
import buzzfeed from '../../images/buzzfeed.svg';
import hexatech from '../../images/hexatech.svg';
import indeed from '../../images/indeed.svg';
import mode from '../../images/mode.svg';
import stripe from '../../images/stripe.svg';
import typeform from '../../images/typeform.svg'; 

function TrustedClients({heading}) {
    return (
        <div className="container">
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
        </div>
    )
}

export default TrustedClients
