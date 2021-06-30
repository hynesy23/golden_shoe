import React from 'react'
import { HomepageCollectionCard } from './HomepageCollectionCard';

import mensShoes from '../images/mens-shoes.jpg';
import womensShoes from '../images/womens-footwear.jpg';
import kidsShoes from '../images/kids-shoes.jpg';
import allShoes from '../images/all_shoes.jpg';

import { Link } from 'react-router-dom';

const CollectionList = () => {

    const categories = [
        {
            name: "Shop All",
            image: allShoes,
            cta: "Shop Now",
            link: "all"
        },
        {
            name: "Men's Collection",
            image: mensShoes,
            cta: "Shop Now",
            link: "mens"
        },
        {
            name: "Ladies Collection",
            image: womensShoes,
            cta: "Shop Now",
            link: "ladies"
        },
        {
            name: "Kids Collection",
            image: kidsShoes,
            cta: "Shop Now",
            link: "kids"
        }
    ]

    return (
        <div>
            {categories && 
                <div className="first-collection">
                    <img src={categories[0].image} alt={categories[0].name} />
            <div className="textbox">
                <div className="name">{categories[0].name}</div>
                <Link className="cta" to={`collections/${categories[0].link}`}>
                    <div>{categories[0].cta}</div>
                </Link>
            </div>
                </div>}
            <div className="collection-container">
                {categories.slice( 1 ).map( (category, i) => {
                    return(
                        <HomepageCollectionCard key={category.name} category={category} index={i}/>
                    )
                })}
            </div>
        </div>
    )
}

export default CollectionList
