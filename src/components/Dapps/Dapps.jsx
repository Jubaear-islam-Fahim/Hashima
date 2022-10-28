import React from "react";
import Slider from "react-slick";
import dapps from '../../image/dapps.svg'
import './Dapps.scss'

const dappsData = [
    {
        title: 'Defi',
        image: dapps,
        desc: 'Hashimaswap',
    },
    {
        title: 'Defi',
        image: dapps,
        desc: 'Hashimaswap',
    },
    {
        title: 'Defi',
        image: dapps,
        desc: 'Hashimaswap',
    },
    {
        title: 'Defi',
        image: dapps,
        desc: 'Hashimaswap',
    },
    {
        title: 'Defi',
        image: dapps,
        desc: 'Hashimaswap',
    },
]
const Dapps = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        responsive: [ 
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3, 
                autoplay: true,
                autoplaySpeed: 2000,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2, 
                autoplay: true,
                autoplaySpeed: 2000,
              }
            }
          ]
    };
    return (
        <div className="Dapps-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-xl-6">
                        <div className="dapps-text">
                            <span>See what’s being built</span>
                            <div className="h2">Hashima Dapps</div>
                        </div>
                    </div>
                    <div className="col-lg-7 col-xl-5 ms-auto align-self-end align-self-lg-center">
                        <div className="dapps-text">
                            <p className="mb-0">We are working with several projects that will be building 
                            utility for the Hashima NFTs  and expanding the Protocol in innovative ways.</p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <Slider {...settings} className="dapps-slid"> 
                            {dappsData.map((item)=>(
                                <div className="dapps-item">
                                    <span>{item.title}</span>
                                    <img src={item.image} alt="" />
                                    <p>{item.desc}</p>
                                </div> 
                            ))}
                        </Slider>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dapps