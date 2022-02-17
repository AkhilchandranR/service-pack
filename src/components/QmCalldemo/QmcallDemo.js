import React from 'react';
import './QmcallDemo.css';
import design from '../../images/design.png';

function QmCallDemo({ illImage }) {
    return (
        <div className="container-sm">
            <div className="callDemo">
                <div className="QmcallDemo__image">
                    <img src={illImage} alt="DemoCall"/>
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

export default QmCallDemo
