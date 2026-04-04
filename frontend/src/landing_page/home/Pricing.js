import React from 'react';

function Pricing() {
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-md-4'>
                    <h1 className='mb-3 fs-2 text-center text-md-start'>Unbeatable pricing</h1>
                    <p className='text-center text-md-start'>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <div className='text-center text-md-start'>
                        <a href='*'style={{textDecoration:"none"}}>See Pricing <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className='col-12 col-md-2'></div>
                <div className='col-12 col-md-6 mb-5'>
                    <div className='row text-center'>
                        <div className='col-12 col-md p-3 border'>
                            <h1 className='mb-3'>₹0</h1>
                            <p>Free equity delivery and<br/>direct mutual</p>
                        </div>
                        <div className='col-12 col-md p-3 border'>
                            <h1 className='mb-3'>₹20</h1>
                            <p>Intraday and
                            F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;