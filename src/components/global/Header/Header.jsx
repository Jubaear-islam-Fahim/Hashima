import React from 'react'
import logo from '../../../image/logo.svg'
import navbar from '../../../image/var.svg'
import { MdClose } from "react-icons/md";
import './Header.scss'
const Header = () => {
    return (
        <nav className="navbar navbar-top">
            <div className="container">
                <a className="navbar-brand" href="/">
                    <img src={logo} alt="" />
                </a>
                <div className="wallet ms-auto me-3">
                    <button className='btn-md'>Connect Wallet</button>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                    <img src={navbar} alt="" />
                </button>

                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                    <div className="d-gird"> 
                        <button type="button" className='close-nav' data-bs-dismiss="offcanvas" aria-label="Close">
                            <MdClose/>
                        </button> 
                        <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
                            <img src={logo} alt=""  height={53} />
                        </h5>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3"> 
                            <li className="nav-item">
                                <a className="nav-link" href="/">LAUCNH APP</a>
                            </li> 
                            <li className="nav-item">
                                <a className="nav-link" href="/">HOME</a>
                            </li> 
                            <li className="nav-item">
                                <a className="nav-link" href="/">WHITEPAPER</a>
                            </li> 
                            <li className="nav-item">
                                <a className="nav-link" href="/">COLLECTION</a>
                            </li> 
                            <hr />
                            <li className="nav-item">
                                <a className="nav-link" href="/">MARKETPLACE</a>
                            </li> 
                            <li className="nav-item">
                                <a className="nav-link" href="/">ARTIST</a>
                            </li> 
                            <li className="nav-item">
                                <a className="nav-link" href="/">DOCUMENTATION</a>
                            </li> 
                        </ul> 
                        <hr />
                        <ul className="navbar-nav policy-nav justify-content-end flex-grow-1 pe-3"> 
                            <li className="nav-item">
                                <a className="nav-link" href="/">Privacy Policy</a>
                            </li> 
                            <li className="nav-item">
                                <a className="nav-link" href="/">Terms of Service</a>
                            </li> 
                            <li className="nav-item">
                                <div className="copyright">2022 HASHIMA. All right reserved.</div>
                            </li>  
                        </ul> 
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header