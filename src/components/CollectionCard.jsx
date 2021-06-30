import { React, useState } from 'react';

import { Link } from 'react-router-dom';

import shoeImage from '../images/shoe.jpg';

import { BsFillHeartFill, BsHeart } from 'react-icons/bs';


export const CollectionCard = ({ shoe }) => {
    // const [wishlistPopulated, setWishlistPopulated] = useState(false)

    const handleAddToWishlist = (e) => {
        const target = e.target;
        // const parent = target.closest( ".card-item" );
        // const shoeName = parent.dataset.name;
        // localStorage.setItem( 'wishlist', JSON.stringify(shoeName) );
        // setWishlistPopulated(true);
    }

    return (
        <div className="card-item" data-name={shoe.name}>
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
