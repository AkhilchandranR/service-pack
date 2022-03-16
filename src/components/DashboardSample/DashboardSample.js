import React,{ useState } from 'react';
import Options from './Options/Options';
import dashboard from '../../images/dashboard.png';
import './DashboardSample.css';
import Slide from 'react-reveal/Slide';

function DashboardSample({colour,bgcolor,bgImage,
    heading1,caption1,heading2,caption2,heading3,caption3}) {
    const[selected,setSelected] = useState(1);
    return (
        <div className='dashboardSample'>
            <p className="dashboardSample__sectionName">── <span style={{color:colour}}>SAMPLE TITLE</span> ──</p>
            <h1>Sample title sample title</h1>
            <div className='dashboard__contents'style={{backgroundColor:bgcolor}}>
                <div className='dashboardSample__body'>
                    <div className='dashboard__options'>
                        <div className={`dashboard__option  ${(selected === 1) ? "activeOption":""}`} onClick={()=>setSelected(1)}>
                            <Options heading={heading1} caption={caption1}/>
                        </div>
                        <div className={`dashboard__option  ${(selected === 2) ? "activeOption":""}`} onClick={()=>setSelected(2)}>
                            <Options heading={heading2} caption={caption2}/>
                        </div>
                        <div className={`dashboard__option  ${(selected === 3) ? "activeOption":""}`} onClick={()=>setSelected(3)}>
                            <Options heading={heading3} caption={caption3}/>
                        </div>
                    </div>
                    <div className='dashboard__illustration'>
                        {(selected === 1) &&
                        <Slide right>
                         <img src={dashboard} alt='dashboard'/>
                         </Slide>
                         }
                        {(selected === 2) && 
                        <Slide right>
                        <img src={dashboard} alt='dashboard'/>
                        </Slide>
                        }
                        {(selected === 3) && 
                        <Slide right>
                        <img src={dashboard} alt='dashboard'/>
                        </Slide>
                        }
                    </div>
                </div>
                <div className='dashboard__fill' style={{backgroundImage:`linear-gradient(${bgImage})`}}></div>  
            </div>
        </div>
    )
}

export default DashboardSample
