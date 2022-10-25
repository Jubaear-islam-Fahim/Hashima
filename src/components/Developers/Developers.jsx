import React from 'react'
import developers from '../../image/developers.svg'
import './Developers.scss'
const Developers = () => {
    return (
        <div className="developers-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 align-self-center">
                        <div className="developers-text">
                            <span>Hashima for developers</span>
                            <div className="h2">Build powerful apps, secured by Bitcoin</div>
                            <p>Hashima connects to Bitcoin, enabling you to build apps, smart contracts, and digital assets that are integrated with Bitcoin's security, capital, and network. (Place Holder)</p>
                            <div className="deve-btn d-flex gap-4 align-items-center">
                                <a href="/" className='read-more read-rou'>Start Building</a>
                                <a href="/" className='read-more'>Read Docs</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 ms-auto align-self-center">
                        <div className="developers-img">
                            <img src={developers} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Developers