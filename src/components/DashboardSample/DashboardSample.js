import React,{ useState } from 'react';
import Options from './Options/Options';
import dashboard from '../../images/dashboard.png';
import './DashboardSample.css';
import Slide from 'react-reveal/Slide';

function DashboardSample() {
    const[selected,setSelected] = useState(1);
    return (
        <div className='dashboardSample'>
            <p className="dashboardSample__sectionName">── <span>SAMPLE TITLE</span> ──</p>
            <h1>Sample title sample title</h1>
            <div className='dashboard__contents'>
                <div className='dashboardSample__body'>
                    <div className='dashboard__options'>
                        <div className={`dashboard__option  ${(selected === 1) ? "activeOption":""}`} onClick={()=>setSelected(1)}>
                            <Options/>
                        </div>
                        <div className={`dashboard__option  ${(selected === 2) ? "activeOption":""}`} onClick={()=>setSelected(2)}>
                            <Options/>
                        </div>
                        <div className={`dashboard__option  ${(selected === 3) ? "activeOption":""}`} onClick={()=>setSelected(3)}>
                            <Options/>
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
                <div className='dashboard__fill'></div>  
            </div>
        </div>
    )
}

export default DashboardSample
