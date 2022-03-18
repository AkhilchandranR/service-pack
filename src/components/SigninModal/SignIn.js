import React,{ useState } from 'react';
import signin from '../../images/signin.svg';
import logo from '../../images/logo.svg';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import './SignIn.css';
import axios from 'axios';
import { useSelector,useDispatch } from 'react-redux';
import { closeModal } from '../../redux/rootReducer';

function SignIn({open,close}) {
    const[fName,setFname] = useState('');
    const[lName,setLname] = useState('');
    const[job,setJob] = useState('');
    const[email,setEmail] = useState('');
    const[phone,setPhone] = useState('');
    const[company,setCompany] = useState('');
    const[country,setCountry] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async(e) =>{
        e.preventDefault();

        if(fName === '' || lName === '' || job === '' || email === '' || phone === '' || company === '' || country === ''){
            window.alert("Please fill in all the fields");
            return;
        }

        var data = {
            "first_name": fName,
            "last_name": lName,
            "job_title": job,
            "business_email": email,
            "phone_number": phone,
            "company_name": company,
            "country": country
        }
        await axios.post('https://dev.servicepack.ai/api/observedemo/',data)
        .then((res)=>{
            window.alert("Successfully requested")
        }).catch((error)=>{
            console.log("Failed to request")
        })
        dispatch(closeModal());
    } 

    if(!open) return null;

    return(
        <>
        <div className='overlay' onClick={()=>dispatch(closeModal())}></div>
        <div className='signIn'>
            <div className='signIn__modal'>
                {/* <div className='signIn__image'>
                    <img src={signin} alt='rocket'/>
                </div> */}
                <form className='signIn__form'>
                    <img src={logo} alt='logo'/>
                    
                    <div className='signIn__heading'>
                        <h1>Request a demo</h1>
                    </div>
                    
                    <div className='signIn__inputWrapper'>
                        <p className='signIn__label'>First Name</p>
                        <div className='signIn__input'>
                            <input type='text'
                             placeholder='Jenny'
                             value={fName}
                             onChange={(e)=>setFname(e.target.value)}/>
                        </div>
                    </div>
                    <div className='signIn__inputWrapper'>
                        <p className='signIn__label'>Last Name</p>
                        <div className='signIn__input'>
                            <input type='text' 
                            placeholder='Wilson'
                            value={lName}
                             onChange={(e)=>setLname(e.target.value)}/>
                        </div>
                    </div>
                    <div className='signIn__inputWrapper'>
                        <p className='signIn__label'>Job Title</p>
                        <div className='signIn__input'>
                            <input type='text' 
                            placeholder='Sales Manager'
                            value={job}
                             onChange={(e)=>setJob(e.target.value)}/>
                        </div>
                    </div>

                    <div className='signIn__inputWrapper'>
                        <p className='signIn__label'>Email Address</p>
                        <div className='signIn__input'>
                            <input type='email'
                             placeholder='example@gmail.com'
                             value={email}
                             onChange={(e)=>setEmail(e.target.value)}/>
                        </div>
                    </div>

                    <div className='signIn__inputWrapper'>
                        <p className='signIn__label'>Phone</p>
                        <div className='signIn__input'>
                            <input type='text' 
                            placeholder='+123456789'
                            value={phone}
                             onChange={(e)=>setPhone(e.target.value)}/>
                        </div>
                    </div>

                    <div className='signIn__inputWrapper'>
                        <p className='signIn__label'>Company Name</p>
                        <div className='signIn__input'>
                            <input type="text" 
                            placeholder='Flyontech'
                            value={company}
                             onChange={(e)=>setCompany(e.target.value)}/>
                        </div>
                    </div>
                    <div className='signIn__inputWrapper'>
                        <p className='signIn__label'>Country</p>
                        <div className='signIn__input'>
                            <input type='text' 
                            placeholder='India'
                            value={country}
                             onChange={(e)=>setCountry(e.target.value)}/>
                        </div>
                    </div>
                    
                    {/* <div className='signIn__checkbox'>
                        <input type='checkbox'/>
                        <p>By creating an account you agree to the terms of use and our privacy policies</p>
                    </div> */}

                    <button onClick={handleSubmit}>Request</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default SignIn
