import React from 'react'

export const Basket = ({handleBasketVisibility}) => {
    return (
        <div className="basket-container">
            <div onClick={handleBasketVisibility}>X</div>
            <div>
                <p>Your Basket:</p>
                <p>Your basket is currently empty</p>
            </div>
        </div>
    )
}
