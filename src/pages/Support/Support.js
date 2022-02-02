import React,{ useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner from '../../components/Banner/SupportBanner/SupportBanner';
import supportBanner from '../../images/supportbanner.svg'
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';
import ContactSupportSharpIcon from '@mui/icons-material/ContactSupportSharp';
import ChatOutlinedIcon from '@mui/icons-material/ChatOutlined';
import './Support.css';
import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import vector from '../../images/supportvector.svg';

function Support() {
    const [selected,setSelected] = useState(1);
    const navigate = useNavigate();
    return (
        <div className='support'>
            <Navbar/>
            <Banner 
            bannerImage={supportBanner} buttonColor="#000000" 
             heading="A title about our availability around the clock ."
             vector={vector}/>

             <div className='support__buttons'>
                 <button className={`${(selected === 1) ? "clicked" : ""}`} onClick={() => {setSelected(1);navigate('/servicepack/knowledgebase')}}>
                     <LightbulbOutlinedIcon/>
                     <p>Knowledge Base</p>
                 </button>
                 <button className={`${(selected === 2) ? "clicked" : ""}`} onClick={() => {setSelected(2);;navigate('/servicepack/faqs')}}>
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
