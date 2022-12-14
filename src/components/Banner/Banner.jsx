import React from 'react'
import bannerImg from '../../image/banner-img.svg'
import bannerPhoneImg from '../../image/banner-phone-img.svg'
import './Banner.scss'
const Banner = () => {
    return (
        <div className="banner-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="banner-content">
                            <div className="banner-text">
                                <span>hashima Protocol</span>
                                <h1>THE NEXT GENERATION OF NFTs</h1>
                                <p>Collect, Mine and Build Join in the revolution.</p>
                                <a href="/" className="btn-lg">Mint Now</a>
                            </div>
                            <div className="banner-img">
                                <div className="d-none d-lg-block">
                                    <img src={bannerImg} alt="" />
                                </div>
                                <div className="d-lg-none">
                                    <img src={bannerPhoneImg} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner