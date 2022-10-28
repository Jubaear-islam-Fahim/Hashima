import React from 'react'
import features1 from '../../image/f1.svg'
import features2 from '../../image/f2.svg'
import './Features.scss'
const Features = () => {
    return (
        <div className="features-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-lg-none">
                        <div className="features-text"> 
                            <span className='d-none d-lg-block'>Tagline</span>
                            <span className='d-lg-none'>Features</span>
                            <div className="h2">Nakamoto Genesis Mint</div>
                            <p>1st Hashima based NFT collection, created by the Hashima Developer.</p> 
                        </div>
                    </div>
                    <div className="col-lg-6 features-order align-self-center">
                        <div className="features-gallery">
                            <div className="main-img">
                                <img src={features1} alt="" />
                            </div>
                            <div className="text">
                                <img src={features2} alt="" />
                                <img src={features2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 align-self-center">
                        <div className="features-text">
                            <div className="d-none d-lg-block">
                                <span>Tagline</span>
                                <div className="h2">Nakamoto Genesis Mint</div>
                                <p>1st Hashima based NFT collection, created by the Hashima Developer.</p>
                            </div>
                            <div className="btn-groups d-lg-flex align-items-lg-center gap-4">
                                <a href="/" className="btn-md">MINT NOW</a>
                                <a href="/" className='read-more'>Visit Secondary Market</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features