import React from 'react';
import './QuestionsTab.css';

function QuestionsTab() {
  return(
    <div className='questionsTab'>
        <div className='questionsTab__heading'>
            Getting Started
        </div>
        <div className='questionsTab__body'>
            <p>Observe.AI Service Legal Agreement</p>
            <p>Day in the life using observe.AI</p>
            <p>How to log into into Observe.AI</p>
            <p>How to reset your password</p>
            <p>How to add a new user to Observe.AI</p>
            <p>How to remove a user from Observe.AI</p>
        </div>
    </div>
  );
}

export default QuestionsTab;
