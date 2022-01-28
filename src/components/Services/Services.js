import React,{ useState } from 'react';
import './Services.css';
import design from '../../images/design.png';
import CallDemo from '../../components/CallDemo/CallDemo';
import QmcallDemo from '../../components/QmCalldemo/QmcallDemo';
import calldemo from '../../images/calldemo.svg';
import Slide from 'react-reveal/Slide';

import banner3 from '../../images/banner3.svg';
import banner4 from '../../images/banner4.svg';
import banner5 from '../../images/banner5.svg';

function Services() {
    const[selected,setSelected] = useState(1);

    return (
        <>
        <div className="services">
            <img className="services__designLeft" src={design} alt="designLeft"/>
            <img className="services__designRight" src={design} alt="designRight"/>
            <p className="services__heading">── <span>OUR SERVICES</span> ──</p>
            <h1>One-stop shop for Contact Center AI</h1>
            
            <div className="services__container">
                <div className={`services__text ${(selected === 1) ? "active":""}`}>
                    <p onClick={()=>setSelected(1)}>Quality Monitering</p>
                    <p>>></p>
                </div>
                <div className={`services__text ${(selected === 2) ? "active":""}`}>
                    <p onClick={()=>setSelected(2)}>Virtual Assistants</p>
                    <p>>></p>
                </div>
                <div className={`services__text ${(selected === 3) ? "active":""}`}>
                    <p onClick={()=>setSelected(3)}>Conersational AI</p>
                    <p>>></p>
                </div>
                <div className={`services__text ${(selected === 4) ? "active":""}`}>
                    <p onClick={()=>setSelected(4)}>Review Analytics</p>
                </div>
            </div>
        </div>
        {(selected === 1) &&
        <Slide left>
            <QmcallDemo illImage={calldemo}/>
        </Slide>
        }
        {(selected === 2) && 
        <Slide left>
        <CallDemo illImage={banner3}/>
        </Slide>
        }
        {(selected === 3) && 
        <Slide left>
        <CallDemo illImage={banner4}/>
        </Slide>
        }
        {(selected === 4) && 
        <Slide left>
        <CallDemo illImage={banner5}/>
        </Slide>
        }
        </>
    )
}

export default Services
