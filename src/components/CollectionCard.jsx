import React from 'react';
import { useState, useEffect } from 'react';

import shoeImage from '../images/shoe.jpg'

// import { handleAddToWishlist } from '../utils'

import { BsBagFill, BsBag, BsFillHeartFill, BsHeart, BsSearch } from 'react-icons/bs';


export const CollectionCard = ({ shoe }) => {
    const [notInWishList, setnotInWishList] = useState(true)

    const handleAddToWishlist = (element) => {
        const { target } = element;
        console.log(target)


        
        // if( target.dataset.add === "true" )
        // {
        //     const parent = target.parentElement;
        //     target.style.display = "none";
        //     const fullHeart = parent.querySelector( ".full-heart" );
        //     fullHeart.style.display = "block"
        // }
        // else if( target.dataset.remove === "true" )
        // {
        //     const parent = target.parentElement.parentElement;
        //     target.parent.style.display = "none";
        //     const emptyHeart = parent.querySelector( ".empty-heart" );
        //     emptyHeart.style.display = "block";
        // }
    }

    return (
        <div className="card-item">
            <div className="image">
                <img src={shoeImage} alt="" />
                <BsHeart className="icon empty-heart" onClick={handleAddToWishlist} data-add="true"/>
                <BsFillHeartFill className="icon full-heart" onClick={handleAddToWishlist} data-remove="true"/>
            </div>
            <div className="header">{shoe.name}</div>
            <div>£{shoe.price.toFixed(2)}</div>
            <div>
                <div>VIEW</div>
                <div>ADD TO CART</div>
            </div>
        </div>
    )
}