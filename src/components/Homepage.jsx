import React from 'react'
import CollectionSlider from './CollectionSlider'

const categories = [
    {
        name: "Sale now on!",
        image: "../images/sale.jpg"
    },
    {
        name: "Men's Collection",
        image: "lll"
    },
    {
        name: "Women's Collection",
        image: "dddd"
    }
]

export const Homepage = () => {
    return (
        <div>
            <h1>Homepage</h1>
            {/* <div className="collections-slider"></div> */}
            <CollectionSlider />
            
        </div>
    )
}
