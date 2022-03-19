import React from 'react';
import './Tool.css';
import color from '../../images/talkdesk.jpg'; 
import down from '../../images/twilio.png';
import lysonia from '../../images/three.png';
import ordda from '../../images/salesforce.png';
import pepaso from '../../images/five.png';
import zewwe from '../../images/logo_six.jpg';
import Slide from 'react-reveal/Slide';

function Tools({heading}) {
    return (
        <div className="container">
            <div className="tools">
                <Slide bottom>
                    <h1>{heading}</h1>
                </Slide>
                <Slide bottom>
                    <div className="tools__clients">
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

export default Tools
