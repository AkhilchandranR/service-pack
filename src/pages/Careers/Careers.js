import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner2 from '../../components/Banner2/Banner2';
import careerbanner from '../../images/careerbanner.svg';
import './Careers.css';
import Footer from '../../components/Footer/Footer';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';


function Careers() {
  return(
    <div className='careers'>
        <Navbar/>
        <Banner2 
        bannerImage={careerbanner} buttonColor="#000000" 
        heading="An exciting statement to lit a curiosity of working with us "
        />

        <div className='careers__postings'>
            <h1>Title about job search title about job search title</h1>
            <div className='careers__search'>
                <div className='careers__typeSearch'>
                    <SearchIcon/>
                    <input type="text" placeholder='Search'/>
                    <MicIcon/>
                </div>
                <div className='careers__typeSearch'>
                    <input type='selection' placeholder='Filter by Role'/>
                    <ArrowDropDownIcon/>
                </div>
                <div className='careers__typeSearch'>
                    <input type='selection' placeholder='Filter by Location'/>
                    <ArrowDropDownIcon/>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
  );
}

export default Careers;
