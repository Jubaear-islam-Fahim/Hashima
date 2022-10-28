import React from 'react'
import logo from '../../../image/logo.svg'
import { FaLinkedin,FaTwitter,FaInstagram,FaDiscord } from "react-icons/fa";
import './Footer.scss'
const Footer = () => {
    return (
        <div className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer-widget text-center">
                            <div className="footer-logo">
                                <a href="/"><img src={logo} alt="" /></a>
                            </div>
                            <div className="footer-social">
                                <a href="/"><FaLinkedin/></a>
                                <a href="/"><FaTwitter/></a>
                                <a href="/"><FaInstagram/></a>
                                <a href="/"><FaDiscord/></a>
                            </div>
                            <div className="footer-nav">
                                <a href="/">Github</a>
                                <a href="/">Developers Docs</a>
                                <a href="/">Creators</a>
                                <a href="/">Marketplace</a> 
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-lg-6">
                        <div className="copyright">
                            <p>2022 HASHIMA. All right reserved.</p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="policy-list">
                            <a href="/">Privacy Policy</a>
                            <a href="/">Terms of Service</a>
                            <a href="/" className='d-none d-lg-block'>Cookies Settings</a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer