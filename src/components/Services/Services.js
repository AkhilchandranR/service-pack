import React,{ useState } from 'react';
import './Services.css';
import design from '../../images/design.png';
import CallDemo from '../../components/CallDemo/CallDemo';
import QmcallDemo from '../../components/QmCalldemo/QmcallDemo';
import calldemo from '../../images/banner2.svg';

import banner3 from '../../images/banner3.svg';
import banner4 from '../../images/banner4.svg';
import banner5 from '../../images/banner5.svg';
import cocobanner from '../../images/cocobanner.svg';
import Slide from 'react-reveal/Slide';

function Services() {
    const[selected,setSelected] = useState(1);

    return (
        <>
        <div className="services">
            <img className="services__designLeft" src={design} alt="designLeft"/>
            <img className="services__designRight" src={design} alt="designRight"/>
            <Slide bottom>
                <p className="services__heading">── <span>OUR SERVICES</span> ──</p>
            </Slide>
            <Slide bottom>
                <h1>One-stop shop for Contact Center AI</h1>
            </Slide>

            <Slide bottom>
                <div className="services__container">
                    <div className={`services__text ${(selected === 1) ? "active":""}`}>
                        <p onClick={()=>setSelected(1)}>Quality Monitering</p>
                    </div>
                    <div className={`services__text ${(selected === 2) ? "active":""}`}>
                        <p onClick={()=>setSelected(2)}>Virtual Assistants</p>
                    </div>
                    <div className={`services__text ${(selected === 3) ? "active":""}`}>
                        <p onClick={()=>setSelected(3)}>Conersational AI</p>
                    </div>
                    <div className={`services__text ${(selected === 4) ? "active":""}`}>
                        <p onClick={()=>setSelected(4)}>Review Analytics</p>
                    </div>
                    <div className={`services__text ${(selected === 5) ? "active":""}`}>
                        <p onClick={()=>setSelected(5)}>Biometric Bot</p>
                    </div>
                </div>
            </Slide>

        </div>
        {(selected === 1) &&
        <QmcallDemo illImage={calldemo}
        heading="Enabling 100% call sampling with Conversational Intelligence Platform, powered by AI."
        content="Unlock the full potential of Speech Analytics for an efficient Quality Monitoring,
         Compliance Automation, Agent Coaching & Reporting."/>
        }
        {(selected === 2) && 
        <CallDemo illImage={banner4}
        heading="Emphasizing Customer Empathy with Conversational AI."
        content="Provide unmatched Customer Service with our highly customizable Zero code AI
         bot with Sentiment Prediction and Lead Generation capabilities."/>
        }
        {(selected === 3) && 
        <CallDemo illImage={banner3}
        heading="Ensuring zero response time with Conversational IVR."
        content="Hyper intelligent Conversational IVR for Customer Service, Reminders, Reservations & Routing."/>
        }
        {(selected === 4) && 
        <CallDemo illImage={banner5}
        heading="Elevating the voice of customers with text analytics powered by NLP."
        content="Comprehensive Feedback and Survey Analytics summary to make an informed decision."/>
        }
        {(selected === 5) && 
        <QmcallDemo illImage={cocobanner}
        heading="Evolving new age biometrics with contactless AI"
        content="Embracing Contactless Biometrics for identification and access control"/>
        }
        </>
    )
}

export default Services
