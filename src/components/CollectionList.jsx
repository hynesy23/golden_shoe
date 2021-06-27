import React from 'react'
import mensShoes from '../images/mens-shoes.jpg';
import womensShoes from '../images/womens-footwear.jpg';
import kidsShoes from '../images/kids-shoes.jpg';

const categories = [
    {
        name: "Men's Collection",
        image: mensShoes,
        cta: "Shop Now",
        link: "mens"
    },
    {
        name: "Women's Collection",
        image: womensShoes,
        cta: "Shop Now",
        link: "mens"
    },
    {
        name: "Kids Collection",
        image: kidsShoes,
        cta: "Shop Now",
        link: "mens"
    }
]

const CollectionList = () => {
    return (
        <div className="collection-container">
            {categories.map( category => {
                return(
                    <div className="collection-item" key={category.name}>
                        <img src={category.image} alt={category.name} />
                        <div className="textbox">
                            <div className="name">{category.name}</div>
                            <div className="cta">{category.cta}</div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default CollectionList
