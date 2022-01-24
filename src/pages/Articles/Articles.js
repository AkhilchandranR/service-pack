import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import BreadCrumbs from '../../components/BreadCrumbs/BreadCrumbs';
import Footer from '../../components/Footer/Footer';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import john from '../../images/johnavatar.png';
import './Articles.css';

function Articles() {
  return(
      <div className='articles'>
          <Navbar/>

          <BreadCrumbs 
            links={[{name:"Service Pack"},{name:"Knowledge Base"},{name:"Getting Started"}]}/>

        <div className='container'>

            <div className='articles__typeSearch'>
                <SearchIcon/>
                <input type="text" placeholder='Search'/>
                <MicIcon/>
            </div>

            <div className='articles__body'>
                <div className='articles__menu'>
                    <h4>Articles in this section</h4>
                    <div className='article__topics'>
                        <p>Observer.AI service level agreement</p>
                    </div>
                    <div className='article__topics'>
                        <p>Day in the life using observe.AI</p>
                    </div>
                    <div className='article__topics'>
                        <p>How to log into Observe.AI</p>
                    </div>
                    <div className='article__topics'>
                        <p>How to reset your password</p>
                    </div>
                    <div className='article__topics'>
                        <p>How to add a new user to observe.AI</p>
                    </div>
                    <div className='article__topics'>
                        <p>How to remove a user from Observe.AI</p>
                    </div>
                    <div className='article__topics'>
                        <p>How do calls get into Observe.AI</p>
                    </div>
                </div>
                <div className='articles__content'>

                    <h1>Observe.AI service level agreement</h1>

                    <div className='articles__avatar'>
                        <img src={john} alt='avatar'/>
                        <div className='articles__avatarName'>
                            <p>John Doe</p>
                            <p>19 days ago.  Updated</p>
                        </div>
                    </div>

                    <div className="articles__description">
                        <h4>Service level agreement</h4>
                        <p>This Service Level Agreement describes Observe.ai’s Support and Maintenance Services which will be provided to customers of Observe.ai purchasing a Software Services subscription license identified in a valid Order Form. All capitalized terms used herein shall have the meaning set forth in the Agreement, unless otherwise defined herein. During the relevant Subscription Term and subject to the terms of the Agreement entered into between the parties and any limitations stated herein, Observe.ai will provide the following Support and Maintenance Services to Customer.  This Service Level Agreement (the “SLA”) forms a part of Observe.ai’s Service Terms and Conditions (the “Service Terms”).  Capitalized terms not defined in this SLA shall have the meaning set forth in the Service Terms.</p>
                    </div>

                    <div className='articles__description2'>
                        <h4>Service levels</h4>
                        <p>Observe.ai shall provide Customer with 99.8% availability to the Service (the “Service Availability”); and (ii) provide email support for the Service to Customer on a 8x5x261 basis (“Service Support”).  Service Support shall only include assistance with issues which are exclusively due to an error with the Service (i.e., a failure of the Service to conform to the written specifications provided by Observe.ai).  Any support outside the scope of Service Support shall be provided by Observe.ai on a time and materials basis. The Service Availability will be measured on a monthly basis, with all hours weighted equally, but the Service Availability measurement will exclude reasonable scheduled downtime for system maintenance as well as any downtime resulting from outages of third party connections or utilities or other reason beyond Observe.ai’s control (including without limitation, acts of God, acts of government, flood, fire, earthquakes, civil unrest, acts of terror, strikes or other labor problems (other than those involving Observe.ai employees), computer, telecommunications, Internet service provider or hosting facility failures or delays involving hardware, software or power systems not within Observe.ai’s possession or reasonable control, and denial of service attacks). </p>
                    </div>

                    <div className="article__help">
                        <div className='article__helpHeading'>
                            <h3>Was this article helpful ?</h3>
                        </div>
                        <div className='article__helpBody'>
                            <div className='article__helpButtons'>
                                <button>Yes</button>
                                <button>No</button>
                            </div>
                            <p>0 out of 0 found this helpful</p>
                            <p>Have more questions ? <span>Submit a request</span></p>
                        </div>
                    </div>

                    <div className="article__recentlyViewed">
                        <h4>Recently viewed articles</h4>
                        <p>How to Enable/disable agents as a talkdesk admin</p>
                        <p>Day in the life using observe.AI</p>
                        <p>Are there any limitations when downloading a CSV file from the calls tab</p>
                        <p>What is Observe.AI inbox</p>
                        <p>How to add new user to observe.AI</p>
                        <p>Observe.AI supported browsers</p>
                    </div>
                </div>
            </div>
            
        </div>

        <Footer/>

      </div>
  );
}

export default Articles;
