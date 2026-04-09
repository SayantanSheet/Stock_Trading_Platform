import React from 'react';
import './Signup.css';
import {useState} from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event)=>{
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/signUp`, {name, email, password}, {withCredentials: true})
        .then( (res)=>{
            if(res.status === 201){
                toast.success("Account created successfully!");
                setTimeout(()=>{
                    window.location.href = process.env.REACT_APP_DASHBOARD_URL;
                },500);
            }else if(res.status === 202){
                toast.error("User already exists! Please Log in.");
            }
        })
        .catch((err)=>{
            console.error("Signup Error: ", err);
            toast.error("An error occurred during signup.");
        })

        setName("");
        setEmail("");
        setPassword("");
    }

    return ( 
        <div className='signup-container'>
            <form className='signup-form' onSubmit={handleSubmit}>
                <h2 className='text-center'>Sign Up</h2>
                
                <div className='form-group'>
                    <label htmlFor="name">Full Name</label>
                    <input
                        type='text'
                        id='name'
                        placeholder='Enter your full name'
                        value={name}
                        required
                        onChange={(e)=> setName(e.target.value)}
                        className='form-control'
                    />
                </div>
                
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
        </div>
    );
}

export default Signup;