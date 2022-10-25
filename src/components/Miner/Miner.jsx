import React from 'react'
import miner from '../../image/miner.svg'
import './Miner.scss'
const Miner = () => {
    return (
        <div className="miner-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="miner-text text-center">
                            <span>Hashima for Miners</span>
                            <div className="h2">Be your own miner.</div>
                        </div>
                        <div className="miner-img">
                            <img src={miner} alt="" />
                        </div>
                        <div className="miner-text">
                            <p>Use SHA 256 POW mining power to contribute to the
                            decentralized NFT networks that adopts the standards.</p>

                            <div className="deve-btn d-flex gap-4 align-items-center justify-content-center">
                                <a href="/" className='read-more read-rou'>Start Mining</a>
                                <a href="/" className='read-more'>Read Docs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Miner