import React from 'react';
import { Link } from 'react-router-dom';

function Universe() {
    return ( 
         <div className="container mt-5">
        <div className="row text-center">
            <h1 className="h3">The Zerodha Universe</h1>
            <p className="text-muted">Extend your trading and investment experience even further with our partner platforms</p>
          <div className="col-12 col-md-4 p-3 mt-5">
            <img src="media/images/smallcaseLogo.png" className="img-fluid" alt="Smallcase" />
            <p className='text-small text-muted'>Thematic investment platform</p>
          </div>
          <div className="col-12 col-md-4 p-3 mt-5">
          <img src="media/images/streakLogo.png" className="img-fluid" style={{width:"140px"}} alt="Streak" />
          <p className='text-small text-muted'>Algo & strategy platform</p>
          </div>
          <div className="col-12 col-md-4 p-3 mt-5">
          <img src="media/images/sensibullLogo.svg" className="img-fluid" style={{width:"140px"}} alt="Sensibull" />
          <p className='text-small text-muted'>Options trading platform</p>
          </div>
          <div className="col-12 col-md-4 p-3 mt-5">
            <img src="media/images/zerodhaFundhouse.png" className="img-fluid" style={{width:"140px"}} alt="Zerodha Fundhouse" />
            <p className='text-small text-muted'>Asset management</p>
          </div>
          <div className="col-12 col-md-4 p-3 mt-5">
          <img src="media/images/goldenpiLogo.png" className="img-fluid" alt="GoldenPi" />
          <p className='text-small text-muted'>Bonds trading platform</p>
          </div>
          <div className="col-12 col-md-4 p-3 mt-5">
          <img src="media/images/dittoLogo.png" className="img-fluid" style={{width:"130px"}} alt="Ditto" />
          <p className='text-small text-muted'>Insurance</p>
          </div>
          <Link to='/signup' className='p-2 btn btn-primary fs-5 mb-5' style={{width:"100%"}}>Signup Now</Link>
        </div>
      </div>
     );
}

export default Universe;