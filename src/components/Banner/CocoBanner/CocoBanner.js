import React from 'react';
import './CocoBanner.css';
import rocket from '../../../images/rocket.png';
import Slide from 'react-reveal/Slide';


function CocoBanner({bannerImage,buttonColor,vector,heading,caption}) {
    return (
        <div className="cocoBanner">
            <div className="container">
            <img className='cocoBanner__vector' src={vector} alt=''/>
                <div className="cocoBanner__contents">
                    <div className="cocoBanner__textContent">
                        <p>{caption}</p>
                        <h1>
                            {heading} 
                            <img src={rocket} alt="rocket"/> 
                        </h1>
                        <p className="cocoBanner__subCaption">Embracing Contactless Biometrics for
                         identification and access control</p>
                         
                        <button style={{backgroundColor:buttonColor}}>Let's Talk</button>
                    </div>
                    <div className="cocoBanner__image">
                        <Slide bottom>
                            <img src={bannerImage} alt="Banner illustration"/>
                        </Slide>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CocoBanner
