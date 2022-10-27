import React from 'react'
import build from '../../image/token.png'
import token from '../../image/band-token.svg'

import './BuildPowerful.scss'
const BuildPowerful = () => {
    return (
        <div className="build-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 align-self-center d-none d-lg-block">
                        <div className="build-img">
                            <img src={build} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 align-self-center">
                        <div className="build-text">
                            <span>Hashima Token</span>
                            <div className="h2">Build powerful apps, secured by Bitcoin</div>
                            <div className="d-lg-none">
                                <div className="build-img">
                                    <img src={build} alt="" />
                                </div>
                            </div>
                            <p>The minting of the token will be completely decentralized all holder of the Hashima NFTs will have to ability to stake their NFTs and take part in the minting process. We will also release Defi solutions to   drive liquidity and give token utility.</p>
                            <div className="deve-btn d-flex gap-4 align-items-center">
                                <a href="/" className='read-more read-rou'>Start Building</a>
                                <a href="/" className='read-more'>Read Docs</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="build-token text-center">
                <img src={token} alt="" />
            </div>
        </div>
    )
}

export default BuildPowerful