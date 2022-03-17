import React from 'react';
import './CallDemo.css';
import design from '../../images/design.png';

function CallDemo({ illImage,heading,content }) {
    return (
        <div className="container-sm">
            <div className="callDemo">
                <div className="callDemo__image">
                    <img src={illImage} alt="DemoCall"/>
                </div>
                <div className="callDemo__description">
                    <div className="callDemo__thickLine"></div>
                    <h2>{heading}</h2>
                    <p>{content}</p>
                    <button>Request for a Demo</button>
                    <img src={design} alt="design"/>
                </div>
            </div>
        </div>
    )
}

export default CallDemo
