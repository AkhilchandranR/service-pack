import React from 'react';
import chatbot from '../../images/chatbot.svg';
import './Chatbotaction.css';

function Chatbotaction() {
    return (
        <div className='chatbotaction'>
            <h1>Like to see in action ?</h1>
            <img src={chatbot} alt='chatbot'/>
        </div>
    )
}

export default Chatbotaction;

