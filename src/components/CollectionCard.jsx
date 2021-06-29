import React from 'react';
// import { useState } from 'react';

import { Link } from 'react-router-dom';

import shoeImage from '../images/shoe.jpg'

// import { handleAddToWishlist } from '../utils'

import { BsFillHeartFill, BsHeart } from 'react-icons/bs';


export const CollectionCard = ({ shoe }) => {
    // const [notInWishList, setnotInWishList] = useState(true)

    const handleAddToWishlist = (element) => {
        // const { target } = element;
    }

    return (
        <div className="card-item">
            <div className="image">
                <img src={shoeImage} alt="" />
                <BsHeart className="icon empty-heart" onClick={handleAddToWishlist} data-add="true"/>
                <BsFillHeartFill className="icon full-heart" onClick={handleAddToWishlist} data-remove="true"/>
            </div>
            <div className="header">{shoe.name}</div>
            <span>{shoe.brand}</span>
            <div>£{shoe.price}</div>
            <div className="cta-container">
                <Link to={`/products/${shoe.id}`}><div>VIEW</div></Link>
                {/* <div>ADD TO CART</div> */}
            </div>
        </div>
    )
}
