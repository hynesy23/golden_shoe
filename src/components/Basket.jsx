import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/basket.css'

import {RiCloseFill} from 'react-icons/ri';

import shoeImage from '../images/shoe.jpg'

export const Basket = ({handleBasketVisibility, basket}) => {
    return (
        <>
        <div className="overlay"></div>
        <div className="basket-container">
            <div className="basket-container-inner">
                <div className="icon" onClick={handleBasketVisibility}>
                    <RiCloseFill />
                </div>
                <div>
                    <p className="header">Your Basket:</p>
                    {basket.length ? 
                    <div>
                        {basket.map( (item, i) => {
                            return (
                                <div key={i} className="basket-item">
                                    <div className="image-container"><img src={shoeImage} alt="" /></div>
                                    <div className="text-container">
                                        <div className="header">{item.name}</div>
                                        <div className="item">£{item.price.toFixed(2)}</div>
                                        <div className="item">SIZE {item.size}</div>
                                    </div>
                                </div>
                            )
                        })}
                        <Link to="/checkout" onClick={handleBasketVisibility}><div className="button">PROCEED TO CHECKOUT</div></Link>
                    </div>
                    : <p>Your basket is currently empty</p>}
                </div>
            </div>
        </div>
        </>
    )
}
