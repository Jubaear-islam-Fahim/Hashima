import React from 'react'
import './CallToAction.scss'
const CallToAction = () => {
    return (
        <div className="call-to-action">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="call-to-action-text">
                            <div className="h2">Get the latest from Hashima</div>
                            <p>Share your email to recieve guides and news from us</p>
                        </div>
                    </div>
                    <div className="col-lg-5 ms-auto">
                        <div className="call-to-action-form">
                            <div className="sing-box">
                                <input type="email" placeholder='Enter your email' />
                                <button type='submit' className='btn-md'>Sign Up</button>
                            </div>
                            <p>By clicking Sign Up you're confirming that you agree with our Terms and Conditions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CallToAction