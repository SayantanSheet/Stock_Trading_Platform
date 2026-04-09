import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/images/homeHero.png' alt='Home Hero' className='mb-5 img-fluid'/>
                <h1 className='mt-5 fs-3 fs-md-1'>Invest in everything</h1>
                <p className='fs-6 fs-md-5'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                <Link to='/signup' className='p-2 btn btn-primary fs-6 fs-md-5 mb-5' style={{width:"80%", maxWidth:"200px", margin:"0 auto"}}>Signup Now</Link>
            </div>
        </div>
     );
}

export default Hero;