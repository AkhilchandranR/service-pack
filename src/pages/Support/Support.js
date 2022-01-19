import React,{ useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/Banner';
import supportBanner from '../../images/supportbanner.svg'
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ContactSupportSharpIcon from '@mui/icons-material/ContactSupportSharp';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import './Support.css';
import Footer from '../../components/Footer/Footer';

function Support() {
    const [selected,setSelected] = useState(1);
    return (
        <div className='support'>
            <Navbar/>
            <Banner 
            bannerImage={supportBanner} buttonColor="#000000" 
             heading="A title about our availability around the clock ."/>

             <div className='support__buttons'>
                 <button className={`${(selected === 1) ? "clicked" : ""}`} onClick={() => setSelected(1)}>
                     <LightbulbOutlinedIcon/>
                     <p>Knowledge Base</p>
                 </button>
                 <button className={`${(selected === 2) ? "clicked" : ""}`} onClick={() => setSelected(2)}>
                     <ContactSupportSharpIcon/>
                     <p>Frequently Asked Questions</p>
                 </button>
                 <button className={`${(selected === 3) ? "clicked" : ""}`} onClick={() => setSelected(3)}>
                     <ChatOutlinedIcon/>
                     <p>Talkdesk</p>
                 </button>
             </div>
             <Footer/>
        </div>
    )
}

export default Support
