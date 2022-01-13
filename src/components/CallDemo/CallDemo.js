import React from 'react';
import './CallDemo.css';
import calldemo from '../../images/calldemo.svg';
import design from '../../images/design.png';

function CallDemo() {
    return (
        <div className="container">
            <div className="callDemo">
                <div className="callDemo__image">
                    <img src={calldemo} alt="DemoCall"/>
                </div>
                <div className="callDemo__description">
                    <div className="callDemo__thickLine"></div>
                    <h1>Heading about Call Quality</h1>
                    <p>Our cognitive AI suit helps understand your customers well and nurture them across all channels</p>
                    <button>Request for a Demo</button>
                    <img src={design} alt="design"/>
                </div>
            </div>
        </div>
    )
}

export default CallDemo
