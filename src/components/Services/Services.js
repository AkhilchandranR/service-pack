import React from 'react';
import './Services.css';
import design from '../../images/design.png';

function Services() {
    return (
        <div className="services">
            <img className="services__designLeft" src={design} alt="designLeft"/>
            <img className="services__designRight" src={design} alt="designRight"/>
            <p className="services__heading">── <span>OUR SERVICES</span> ──</p>
            <h1>One-stop shop for Contact Center AI</h1>
            <div className="services__container">
                <div className="services__text">
                    <p>Quality Monitering</p>
                    <p>>></p>
                </div>
                <div className="services__text">
                    <p>Virtual Assistants</p>
                    <p>>></p>
                </div>
                <div className="services__text">
                    <p>Conersational AI</p>
                    <p>>></p>
                </div>
                <div className="services__text">
                    <p>Review Analytics</p>
                </div>
            </div>
        </div>
    )
}

export default Services