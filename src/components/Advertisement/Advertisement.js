import React from 'react';
import './Advertisement.css';
import Slide from 'react-reveal/Slide';
import { openModal } from '../../redux/rootReducer';
import { useDispatch } from 'react-redux';


function Advertisement({ buttoncolor,imageLeft,imageRight }) {
    const dispatch = useDispatch();
    return (
        <div className="container">
            <Slide bottom>
            <div className="advertisement"> 
                <img src={imageLeft} alt="futureaiLeft"/>
                <div className="advertisement__description">
                    <h1>Ready to Start ?</h1>
                    <p>We are a group of problem solvers offering a revolutionary
                         solution that singularly meets all your Contact Center AI needs.</p>
                    <button style={{backgroundColor:buttoncolor}} onClick={()=>dispatch(openModal())}>Request for a Demo</button>
                </div>
                <img src={imageRight} alt="futureaiRight"/>
            </div>
            </Slide>
        </div>
    )
}

export default Advertisement
