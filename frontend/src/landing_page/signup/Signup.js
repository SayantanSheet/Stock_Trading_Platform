import React from 'react';
import './Signup.css';
import {useState} from 'react';
import axios from 'axios';

function Signup() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userExistance, setUserExistance] = useState(false);

    const closePopup = ()=>{
        setUserExistance(false);
    }

    const handleSubmit = (event)=>{

        event.preventDefault();

        axios.post(`${process.env.REACT_APP_BACKEND_URL}/signUp`, {email, password}, {withCredentials: true})
        .then( (res)=>{
            //checks the status code. if 201, user is new and brings user in dashboard
            if(res.status === 201){
                setTimeout(()=>{
                    window.location.href = process.env.REACT_APP_DASHBOARD_URL;
                    
                },500);
                
            //if 202, shows user a pop up, that the user exist & stays the user in signup page
            }else if(res.status === 202){
                setUserExistance(true);
            }
        })
        .catch((err)=>{
            console.error("Signup Error: ", err);
            setUserExistance(true);
        })

        
        setEmail("");
        setPassword("");
    }

    return ( 
        <div className='signup-container'>
            <form className='signup-form' onSubmit={handleSubmit}>
                <h2 className='text-center'>Sign Up</h2>
                
                <div className='form-group'>
                    <label htmlFor="email">Email Address</label>
                    <input
                        type='email'
                        id='email'
                        placeholder='Create your account email'
                        value={email}
                        required
                        onChange={(e)=> setEmail(e.target.value)}
                        className='form-control'
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input
                        placeholder='Create a secure password'
                        value={password}
                        type='password'
                        id='password'
                        required
                        onChange={(e)=> setPassword(e.target.value)}
                        className='form-control'
                    />
                </div>

                <button type="submit" className='btn-submit' data-testid="signupButton">Create Account</button>
                
                <p className='text-center mt-4' style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>
                    Already have an account? <a href="/login" style={{color: 'var(--primary-color)', fontWeight: '600', textDecoration: 'none'}}>Log In</a>
                </p>
            </form>

            {userExistance && 
            <div className='popup'>
                <div className='popup-content'>
                    <p>The user already exists! Please Log in</p>
                    <button onClick={closePopup} className='btn-close-popup'>Go to Login</button>
                </div>
            </div>
            }
        </div>
    );
}

export default Signup;