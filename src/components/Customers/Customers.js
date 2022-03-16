import React from 'react';
import './Customers.css';

function Customers() {
    return (
        <div className="customers">
            <p className="customers__sectionName">── <span>OUR CUSTOMER</span> ──</p>
            <h1>The pursuit of successful business</h1>
            <p className="customers__content">A business is successful when a customer becomes a subscriber, 
             employees feel appreciated and operations run seamlessly like a well oiled machine,
             and we at Service Pack moved mountains to bring forth AI powered CX product suite to enhance Customer Experience, 
             simplify complicated tasks for employees and run the operations on a semi autopilot.</p>
            <button>Request for a Demo</button>
        </div>
    )
}

export default Customers
