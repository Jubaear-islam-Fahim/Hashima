import React from 'react'
import bitcoin from '../../image/bitcoin.svg'
import './Bitcoin.scss'
const Bitcoin = () => {
    return (
        <div className="bitcoin-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 align-self-center">
                        <div className="bitcoin-text">
                            <span>Hashima for developers</span>
                            <div className="h2">Bitcoin</div>
                            <p>Hashima is based on the Bitcoin protocol and we rely on the POW model introduced by Satoshi Nakamoto. We want to express though our brand and Front-end.</p>
                        </div>
                    </div>
                    <div className="col-lg-6 align-self-center">
                        <div className="d-lg-none pt-4">
                            <div className="deve-btn d-flex gap-4 align-items-center">
                                <a href="/" className='read-more read-rou'>Start Building</a>
                                <a href="/" className='read-more'>Read Docs</a>
                            </div>
                        </div>
                        <div className="bitcoin-img">
                            <img src={bitcoin} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Bitcoin