import React from 'react'
import mintingImg from '../../image/projects-daos.svg'
import vector from '../../image/minting-vector.svg'
import './NFTMinting.scss'
const NFTMinting = () => {
    return (
        <div className="NFTMinting-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="minting-left">
                            <span>Hashima</span>
                            <div className="h2">NFT Minting Standard</div>
                            <img src={mintingImg} alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6 align-self-center">
                        <div className="minting-right">
                            <p>New NFT minting model based on POW mining, developed to harden and bring scarcity to the tokenized asset industry.</p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="minting-item">
                                        <img src={vector} alt="" />
                                        <div className="h6">Subheading one</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="minting-item">
                                        <img src={vector} alt="" />
                                        <div className="h6">Subheading two</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
                                    </div>
                                </div> 
                            </div>
                            <a href="/" className="read-more">Read Morte</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NFTMinting