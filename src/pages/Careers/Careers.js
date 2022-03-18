import React,{ useState,useEffect,useRef } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import CareersBanner from '../../components/Banner/CareersBanner/CareersBanner';
import careerbanner from '../../images/careerbanner.svg';
import './Careers.css';
import Footer from '../../components/Footer/Footer';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import RefreshIcon from '@mui/icons-material/Refresh';
import vector from '../../images/cvector.svg';
import jobData from '../../jobs.json';


function Careers() {
    const allJobs = useRef(jobData);
    const [jobs,setJobs] = useState([]);
    const [searchTerm,setSearchTerm] = useState('');
    const [searchRole,setSearchRole] = useState('');
    const [searchLocation,setSearchLocation] = useState('');
    const [roles,setRoles] = useState(["Machine Learning","Software Development","Product Management"]);
    const [locations,setLocations] = useState(["USA","Hyderabad"]);

    useEffect(() => {
        
        allJobs.current = (jobData.filter((job)=>{
            if(searchLocation === '' && searchRole === '' && searchTerm === ''){
                return job
            }
            else{
                if(searchTerm !== '' && searchLocation === '' && searchRole === ''){
                    return job.role.toLowerCase().includes(searchTerm.toLowerCase())
                }
                else if(searchTerm === '' && searchRole !== '' && searchLocation === ''){
                    return  (job.category.toLowerCase().includes(searchRole.toLowerCase()))
                }
                else if(searchTerm === '' && searchRole === '' && searchLocation !== ''){
                    return  (job.location.toLowerCase().includes(searchLocation.toLowerCase()))
                }
                else if(searchTerm !== '' && searchRole !== '' && searchLocation === ''){
                    return  (job.role.toLowerCase().includes(searchRole.toLowerCase()) &&
                    job.category.toLowerCase().includes(searchTerm.toLowerCase()))
                }
                else if(searchTerm === '' && searchRole !== '' && searchLocation !== ''){
                    return  (job.category.toLowerCase().includes(searchRole.toLowerCase()) &&
                    job.location.toLowerCase().includes(searchLocation.toLowerCase()))
                }
                else if(searchLocation !== '' && searchTerm === '' && searchRole !== ''){
                    (job.location.toLowerCase().includes(searchLocation.toLowerCase()) &&
                    job.category.toLowerCase().includes(searchRole.toLowerCase()))
                }
                else if(searchLocation !== '' && searchTerm !== '' && searchRole === ''){
                    (job.location.toLowerCase().includes(searchLocation.toLowerCase()) &&
                    job.role.toLowerCase().includes(searchTerm.toLowerCase()))
                }
                else if(searchLocation !== '' && searchTerm !== '' && searchRole !== ''){
                    return (job.location.toLowerCase().includes(searchLocation.toLowerCase()) &&
                 job.category.toLowerCase().includes(searchRole.toLowerCase()) &&
                 job.role.toLowerCase().includes(searchTerm.toLowerCase()))
                }
            }
        }))

        var groupData = function (xs,key){
            return xs.reduce(function(rv,x){
                (rv[x[key]]=rv[x[key]] || []).push(x);
                return rv;
            },{});
        };
        var data = groupData(allJobs.current,"category")
        var result = Object.keys(data).map((key)=>[key,data[key]])
        setJobs(result);
    },[searchLocation,searchTerm,searchRole])

    const resetSearch = () =>{
        setSearchTerm('');
        setSearchLocation('');
        setSearchRole('');
    }
    

    
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
                    <input type="text" placeholder='Search'
                    value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
                    <MicIcon/>
                </div>
                <div className='careers__typeSearch'>
                    <select value={searchRole} onChange={(e)=>setSearchRole(e.target.value)} className='careers__selectOption'>
                        <option value="" disabled selected hidden>Filter by role</option>
                        {roles.map(role=>(
                            <option value={role}>{role}</option>
                        ))}
                    </select>
                    <ArrowDropDownIcon/>
                </div>
                <div className='careers__typeSearch'>
                    <select value={searchLocation} onChange={(e)=>setSearchLocation(e.target.value)} className='careers__selectOption'>
                        <option value="" disabled selected hidden>Filter by location</option>
                        {locations.map(loc=>(
                            <option value={loc}>{loc}</option>
                        ))}
                    </select>
                    <ArrowDropDownIcon/>
                </div>
                <RefreshIcon className='reset' onClick={resetSearch}/>
            </div>
        </div>

        <div className='careers__jobs'>
            {
                jobs.map((job)=>(
                    <div className='careers__jobSection'>
                    <h3>{job[0]}</h3>
                    <div className='careers__jobPosts'>
                    {job[1].map((j,index)=>(
                        <div className='related_posts'>
                            <p>{j.role}</p>
                            <p>{j.location}</p>
                        </div>
                    ))}
                    </div>
                </div>
                ))
            }
        </div>

        <Footer/>
    </div>
  );
}

export default Careers;
