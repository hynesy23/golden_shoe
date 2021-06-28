import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import shoeImage from '../images/shoe.jpg'

export const MightAlsoLike = () => {
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        speed: 2000,
        // autoplaySpeed: 3500,
        className: "slides",
        centerPadding: "20px",
        arrows: false
      };
    return (
        <div className="also-like-container">
            <p>You might also like...</p>
            <div className="also-like-container-inner">
                <Slider {...settings}>
                    <div className="item">
                        <div className="image-container">
                            <img src={shoeImage} alt="" />
                        </div>
                        <div>
                            <div>Title</div>
                            <div>Price</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="image-container">
                            <img src={shoeImage} alt="" />
                        </div>
                        <div>
                            <div>Title</div>
                            <div>Price</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="image-container">
                            <img src={shoeImage} alt="" />
                        </div>
                        <div>
                            <div>Title</div>
                            <div>Price</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="image-container">
                            <img src={shoeImage} alt="" />
                        </div>
                        <div>
                            <div>Title</div>
                            <div>Price</div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}
