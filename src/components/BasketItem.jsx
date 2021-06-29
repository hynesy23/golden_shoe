import React from 'react';
import shoeImage from '../images/shoe.jpg';

import $ from 'jquery';

import { RiDeleteBin6Line } from 'react-icons/ri'

export const BasketItem = ({ item, basket }) => {

    const removeFromBasket = (e) => {
        const name = e.target.closest(".basket-item").dataset.name;

        const updatedBasket = basket.filter( item => {
            return item.name !== name
        })

        localStorage.setItem('basket', JSON.stringify(updatedBasket));
        window.location.reload();
        return false;
    }
    return (
        <div className="basket-item" data-name={item.name}>
            <div className="image-container"><img src={shoeImage} alt="" /></div>
            <div className="text-container">
                <div className="header">{item.name}</div>
                <div className="item">£{item.price}</div>
                <div className="item">SIZE {item.size}</div>
                <div className="bin">
                    <RiDeleteBin6Line onClick={removeFromBasket}/>
                </div>
            </div>
        </div>
    )
}
