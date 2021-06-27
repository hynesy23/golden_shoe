import React from 'react'
import mensShoes from '../images/mens-shoes.jpg';
import womensShoes from '../images/womens-footwear.jpg';
import kidsShoes from '../images/kids-shoes.jpg';
import { HomepageCollectionCard } from './HomepageCollectionCard';

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
                    <HomepageCollectionCard key={category.name} category={category}/>
                )
            })}
        </div>
    )
}

export default CollectionList
