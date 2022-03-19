import React from 'react';
import './TrustedClients.css';
import color from '../../images/128-color.png'; 
import down from '../../images/download.png';
import lysonia from '../../images/large_lysonia.png';
import ordda from '../../images/large_ordda.png';
import pepaso from '../../images/large_pepaso.png';
import zewwe from '../../images/large_zewwe.png';
import Slide from 'react-reveal/Slide';

function TrustedClients({heading}) {
    return (
        <div className="container">
            <div className="trustedClients">
                <Slide bottom>
                    <h1>{heading}</h1>
                </Slide>
                <Slide left>
                    <div className="trustedClients__clients">
                        <img src={color} alt="128-color"/>
                        <img src={down} alt="logo"/>
                        <img src={lysonia} alt="lysonia"/>
                        <img src={ordda} alt="ordda"/>
                        <img src={pepaso} alt="pepaso"/>
                        <img src={zewwe} alt="zewwe"/>
                    </div>
                </Slide>
            </div>
        </div>
    )
}

export default TrustedClients
