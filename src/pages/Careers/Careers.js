import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Banner2 from '../../components/Banner2/Banner2';
import careerbanner from '../../images/careerbanner.svg';
import './Careers.css';
import Footer from '../../components/Footer/Footer';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import vector from '../../images/cvector.svg';


function Careers() {
  return(
    <div className='careers'>
        <Navbar/>
        <Banner2 
        bannerImage={careerbanner} buttonColor="#000000" 
        heading="An exciting statement to lit a curiosity of working with us "
        vector={vector}
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
                    <select value='' className='careers__selectOption'>
                        <option value="" disabled selected hidden>Filter by role</option>
                        <option value="manager">Manager</option>
                        <option value="developer">Developer</option>
                    </select>
                    <ArrowDropDownIcon/>
                </div>
                <div className='careers__typeSearch'>
                    <select value='' className='careers__selectOption'>
                        <option value="" disabled selected hidden>Filter by location</option>
                        <option value="usa">USA</option>
                        <option value="uk">UK</option>
                        <option value="india">India</option>
                    </select>
                    <ArrowDropDownIcon/>
                </div>
            </div>
        </div>

        <div className='careers__jobs'>
            <div className='careers__jobSection'>
                <h3>Customer Success</h3>
                <div className='careers__jobPosts'>
                    <div className='related_posts'>
                        <p>Implementation Manager</p>
                        <p>Hyderabad</p>
                    </div>
                    <div className='related_posts'>
                        <p>Principal Customer Success Manager</p>
                        <p>San Francisco</p>
                    </div>
                </div>
            </div>

            <div className='careers__jobSection'>
                <h3>Customer Success</h3>
                <div className='careers__jobPosts'>
                    <div className='related_posts'>
                        <p>Implementation Manager</p>
                        <p>Hyderabad</p>
                    </div>
                    <div className='related_posts'>
                        <p>Principal Customer Success Manager</p>
                        <p>San Francisco</p>
                    </div>
                </div>
            </div>

            <div className='careers__jobSection'>
                <h3>Customer Success</h3>
                <div className='careers__jobPosts'>
                    <div className='related_posts'>
                        <p>Implementation Manager</p>
                        <p>Hyderabad</p>
                    </div>
                    <div className='related_posts'>
                        <p>Principal Customer Success Manager</p>
                        <p>San Francisco</p>
                    </div>
                </div>
            </div>

            <div className='careers__jobSection'>
                <h3>Customer Success</h3>
                <div className='careers__jobPosts'>
                    <div className='related_posts'>
                        <p>Implementation Manager</p>
                        <p>Hyderabad</p>
                    </div>
                    <div className='related_posts'>
                        <p>Principal Customer Success Manager</p>
                        <p>San Francisco</p>
                    </div>
                </div>
            </div>

            <div className='careers__jobSection'>
                <h3>Customer Success</h3>
                <div className='careers__jobPosts'>
                    <div className='related_posts'>
                        <p>Implementation Manager</p>
                        <p>Hyderabad</p>
                    </div>
                    <div className='related_posts'>
                        <p>Principal Customer Success Manager</p>
                        <p>San Francisco</p>
                    </div>
                </div>
            </div>
        </div>

        <Footer/>
    </div>
  );
}

export default Careers;
