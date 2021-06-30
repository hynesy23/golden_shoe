import {React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../styles/basket.css'

import {RiCloseFill} from 'react-icons/ri';

import { BasketItem } from './BasketItem';

import { formatPrices } from '../utils'

export const Basket = ({ handleBasketVisibility }) => {

    const [basket, setBasket] = useState([])
    const [subTotal, setSubTotal] = useState(0)

    useEffect(() => {
        const basket = JSON.parse( localStorage.getItem( 'basket' ) );
        if( basket )
        {
            setBasket(basket);
            let subTotal = 0;
            const formattedItem = formatPrices( basket );
            formattedItem.forEach( item => {
                subTotal += item.price;
            })
            setSubTotal( subTotal );
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
                        <div className="sub-total">Subtotal: £{subTotal}</div>
                        <div className="delivery-text">
                            ** FREE DELIVERY ON ALL ORDERS **
                        </div>
                        <Link to="/checkout" onClick={handleBasketVisibility}><div className="button">PROCEED TO CHECKOUT</div></Link>
                    </div>
                    : <p>Your basket is currently empty</p>}
                </div>
            </div>
        </div>
        </>
    )
}
