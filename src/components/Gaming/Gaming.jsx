import React from 'react'
import gaming from '../../image/gaming.svg'
import './Gaming.scss'
const Gaming = () => {
    return (
        <div className="gaming-area">
            <div className="gaming-bg">
                Gaming
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 gaming-order">
                        <div className="gaming-img">
                            <img src={gaming} alt="" />
                        </div>  
                    </div>
                    <div className="col-lg-6 align-self-xl-center">
                        <div className="gaming-text">
                            <span>Hashima for developers</span>
                            <div className="h2">NFT Gaming</div>
                            <p>Hashima connects to Bitcoin, enabling you to build apps, smart contracts, and digital assets that are integrated with Bitcoin's security, capital, and network. (Place Holder)</p>
                            <a href="/" className='read-more'>Read Docs</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Gaming