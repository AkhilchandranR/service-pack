import React from 'react';
import signin from '../../images/signin.svg';
import logo from '../../images/logo.svg';
import './SignIn.css';

function SignIn() {
    return (
        <>
        <div className='overlay'></div>
        <div className='signIn'>
            <div className='signIn__modal'>
                <div className='signIn__image'>
                    <img src={signin} alt='rocket'/>
                </div>
                <form className='signIn__form'>
                    <img src={logo} alt='logo'/>
                    
                    <div className='signIn__heading'>
                        <h1>Sign Up</h1>
                    </div>
                    
                    <div className='signIn__inputWrapper'>
                        <p className='signIn__label'>Full Name</p>
                        <div className='signIn__input'>
                            <input type='text' placeholder='jenny wilson'/>
                        </div>
                    </div>

                    <div className='signIn__inputWrapper'>
                        <p className='signIn__label'>Email Address</p>
                        <div className='signIn__input'>
                            <input type='email' placeholder='example@gmail.com'/>
                        </div>
                    </div>

                    <div className='signIn__inputWrapper'>
                        <p className='signIn__label'>Username</p>
                        <div className='signIn__input'>
                            <input type='text' placeholder='Example'/>
                        </div>
                    </div>

                    <div className='signIn__inputWrapper'>
                        <p className='signIn__label'>Password</p>
                        <div className='signIn__input'>
                            <input type='password'/>
                        </div>
                    </div>
                    
                    <div className='signIn__checkbox'>
                        <input type='checkbox'/>
                        <p>By creating an account you agree to the terms of use and our privacy policies</p>
                    </div>

                    <button>Sign Up</button>
                </form>
            </div>
        </div>
        </>
    )
}

export default SignIn
