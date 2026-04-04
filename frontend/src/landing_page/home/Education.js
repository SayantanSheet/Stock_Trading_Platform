import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-12 col-md-6 text-center'>
                    <img src='media/images/education.svg' style={{width:"70%"}} alt="Education"/>
                </div>
                <div className='col-12 col-md-6 mt-4 mt-md-0'>
                    <h1 className='mb-3 fs-2 text-center text-md-start'>Free and open market education</h1>
                    <p className='text-center text-md-start'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <div className='text-center text-md-start'>
                        <a href='*' style={{textDecoration:"none"}}>Versity<i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></a>
                    </div>
                    <p className='mt-5 text-center text-md-start'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <div className='text-center text-md-start'>
                        <a href='*' style={{textDecoration:"none"}}>TradingQ&A<i className="fa fa-long-arrow-right ms-2" aria-hidden="true"></i></a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Education;