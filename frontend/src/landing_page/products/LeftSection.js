import React from 'react';

function LeftSection({ imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore }) {
    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-12 col-md-6'>
                    <img src={imageURL} className='img-fluid' alt={productName} />
                </div>
                <div className='col-12 col-md-6 p-5 mt-5'>
                    <h1 className='h3'>{productName}</h1>
                    <p className='text-muted'>{productDescription}</p>
                    <div className='d-flex flex-wrap'>
                        <a href={tryDemo} style={{ textDecoration: "none" }} className='me-3 mb-2'>
                            Try Demo <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                        <a href={learnMore} style={{ textDecoration: "none" }} className='mb-2'>
                            Learn More <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                        </a>
                    </div>
                    <div className='mt-3 d-flex flex-wrap'>
                        <a href={googlePlay} className='me-2 mb-2'>
                            <img src='media/images/googlePlayBadge.svg' className='img-fluid' alt="Google Play" />
                        </a>
                        <a href={appStore} className='mb-2'>
                            <img src='media/images/appstoreBadge.svg' className='img-fluid' alt="App Store" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;