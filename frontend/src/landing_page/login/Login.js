import React from 'react';
import './Login.css';
import {useState} from 'react';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userExistance, setUserExistance] = useState(true);

    const handleSubmit = (event)=>{
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {email, password}, {withCredentials: true})
        .then( (res)=>{
            if(res.status === 201){
                console.log("User exists");
                setTimeout(()=>{
                    window.location.href = process.env.REACT_APP_DASHBOARD_URL;
                },500);
            }else if(res.status === 202){
                console.log("User does not exist");
                setUserExistance(false);
            }
        })
        .catch((err)=>{
            console.error("Login Error: ", err);
            setUserExistance(false);
        })

        setEmail("");
        setPassword("");
    }

    const closePopup = ()=>{
        setUserExistance(true);
    }

    return ( 
        <div className='logIn-container'>
            <form className='logIn-form' onSubmit={handleSubmit}>
                <h2 className='text-center'>Log In</h2>
                
                <div className='form-group'>
                    <label htmlFor="email">Email Address</label>
                    <input
                        type='email'
                        id='email'
                        placeholder='Enter your email'
                        value={email}
                        required
                        onChange={(e)=> setEmail(e.target.value)}
                        className='form-control'
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input
                        placeholder='Enter your password'
                        value={password}
                        type='password'
                        id='password'
                        required
                        onChange={(e)=> setPassword(e.target.value)}
                        className='form-control'
                    />
                </div>

                <button type="submit" className='btn-submit'>Log In</button>
                
                <p className='text-center mt-4' style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>
                    Don't have an account? <a href="/signup" style={{color: 'var(--primary-color)', fontWeight: '600', textDecoration: 'none'}}>Sign Up</a>
                </p>
            </form>

            { !userExistance && 
            <div className='popup'>
                <div className='popup-content'>
                    <p>Incorrect password or email! Please try again.</p>
                    <button onClick={closePopup} className='btn-close-popup'>Try Again</button>
                </div>
            </div>
            }
        </div>
    );
}

export default Login;

