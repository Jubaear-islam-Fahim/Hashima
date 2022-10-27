import React from 'react'
import popupImg from '../../image/popup.svg'
import './PopupOnload.scss'
const PopupOnload = () => {
    return (
        <div className="PopupOnload"> 
            {/* <div className="p-5 text-center">
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Launch demo modal
                </button> 
            </div> */}

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-lg">
                    <div class="modal-content">
                        <img src={popupImg} alt="" /> 
                        <div className="h2">Hashima Newsletter</div>
                        <p>Don’t missout on upcoming mints and new Product launch </p>
                        <div className="form">
                            <input type="email" name='email' placeholder='Enter your email' />
                            <button type="button" class="btn-md" data-bs-dismiss="modal">
                                Get Updates
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupOnload