import React from 'react';

function Stats() {
    return ( 
        <div className='container mt-5'>
            <div className='row text-center'>
                <div className='col-12 col-md-4 p-3'>
                    <h1 className='fs-2'>1M+</h1>
                    <p>Clients</p>
                </div>
                <div className='col-12 col-md-4 p-3'>
                    <h1 className='fs-2'>15%+</h1>
                    <p>Retail order volumes daily on Indian Stock Exchanges</p>
                </div>
                <div className='col-12 col-md-4 p-3'>
                    <h1 className='fs-2'>₹10B+</h1>
                    <p>Daily turnover traded</p>
                </div>
            </div>
        </div>
     );
}

export default Stats;