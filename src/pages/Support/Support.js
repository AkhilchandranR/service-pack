import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import supportBanner from '../../images/supportbanner.svg'
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ContactSupportSharpIcon from '@mui/icons-material/ContactSupportSharp';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import './Support.css';
import Footer from '../../components/Footer/Footer';

function Support() {
    return (
        <div className='support'>
            <Navbar/>
            <Banner 
            bannerImage={supportBanner} buttonColor="#000000" 
             heading="A title about our availability around the clock ."/>

             <div className='support__buttons'>
                 <button>
                     <LightbulbOutlinedIcon/>
                     <p>Knowledge Base</p>
                 </button>
                 <button>
                     <ContactSupportSharpIcon/>
                     <p>Frequently Asked Questions</p>
                 </button>
                 <button>
                     <ChatOutlinedIcon/>
                     <p>Talkdesk</p>
                 </button>
             </div>
             <Footer/>
        </div>
    )
}

export default Support
