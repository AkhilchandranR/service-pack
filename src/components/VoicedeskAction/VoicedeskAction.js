import React from 'react';
import micicon from '../../images/micicon.png';
import actionleft from '../../images/actionleft.png';
import actionright from '../../images/actionright.png';
import './VoicedeskAction.css';

function VoicedeskAction() {
    return (
        <div className='voicedeskAction'>
            <h1>Like to see in Action ?</h1>
            <h2>Try saying</h2>
            <img src={micicon} alt="mic"/>
            <img src={actionleft} alt="actLeft" className='actionLeft'/>
            <img src={actionright} alt='actRight' className='actionRight'/>
        </div>
    )
}

export default VoicedeskAction
