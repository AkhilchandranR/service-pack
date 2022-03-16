import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import CareersBanner from '../../components/Banner/CareersBanner/CareersBanner';
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
        <CareersBanner
        bannerImage={careerbanner} buttonColor="#000000" 
        heading="Team work makes the dream work!"
        vector={vector}
        />

        <div className='careers__postings'>
            <h1>Current Openings</h1>
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
