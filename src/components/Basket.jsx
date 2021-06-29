import {React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../styles/basket.css'

import {RiCloseFill} from 'react-icons/ri';

import { BasketItem } from './BasketItem';

export const Basket = ({ handleBasketVisibility }) => {

    const [basket, setBasket] = useState([])

    useEffect(() => {
        const basket = JSON.parse( localStorage.getItem( 'basket' ) );
        if( basket )
        {
            setBasket(basket);
        }
    }, [])

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
                        {basket && basket.map( item => {
                            return (
                                <BasketItem key={item.id} item={item} basket={basket}/>
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
