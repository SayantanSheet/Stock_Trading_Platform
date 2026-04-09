import React from 'react';
import './Login.css';
import {useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event)=>{
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/login`, {email, password}, {withCredentials: true})
        .then( (res)=>{
            if(res.status === 201){
                toast.success("Login Successful!");
                setTimeout(()=>{
                    window.location.href = process.env.REACT_APP_DASHBOARD_URL;
                },500);
            }else if(res.status === 202){
                toast.error("Incorrect password or email! Please try again.");
            }
        })
        .catch((err)=>{
            console.error("Login Error: ", err);
            toast.error("An error occurred during login. Please try again.");
        })

        setEmail("");
        setPassword("");
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
        </div>
    );
}

export default Login;
