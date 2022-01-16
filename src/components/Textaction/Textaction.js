import React from 'react';
import actionleft from '../../images/actionleft.png';
import actionright from '../../images/actionright.png';
import './Textaction.css';

function Textaction({bColor}) {
    return (
        <div className='textAction'>
            <h1>Like to see in Action ?</h1>
            <div className='textAction__action'>
                <p>Writing or pasting something here and then</p>
                <p> press the submit button</p>
                <button style={{backgroundColor:bColor}}>Submit</button>
            </div>
            <img src={actionleft} alt="actLeft" className='actionLeft'/>
            <img src={actionright} alt='actRight' className='actionRight'/>
        </div>
    )
}

export default Textaction
