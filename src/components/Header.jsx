import { React, useState, useEffect } from 'react'

import { Link } from 'react-router-dom';

import '../styles/header.css';

import mensShoes from '../images/mens-shoes.jpg';
import womensShoes from '../images/womens-footwear.jpg';
import kidsShoes from '../images/kids-shoes.jpg';
import allShoes from '../images/all_shoes.jpg';

import AnnouncementBar from './AnnouncementBar'
// import { DropdownMenu } from './DropdownMenu'
// import {showDropDownMenu} from '../utils'

import { BsBag, BsHeart, BsSearch } from 'react-icons/bs';

export const Header = ({ handleBasketVisibility }) => {

    const [itemCount, setItemCount] = useState(0);

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

    useEffect(() => {
        const itemCount = getItemCount();
        setItemCount(itemCount)
    }, [])

    const getItemCount = () => {
        const basket = JSON.parse( localStorage.getItem( 'basket' ) );
        const itemCount = basket.length;
        return itemCount;
    }

    return (
        <header className="header-container">
            <div>
            <AnnouncementBar />
            <nav className="navbar">
                <Link to="/"><div className="logo">GOLDEN SHOE</div></Link>
                <ul className="categories-container">
                    {categories && categories.map( (category, i) => {
                        return (
                            <li className="category-item" key={i}>
                                <Link to={`collections/${category.link}`}>{category.link}</Link>
                            </li>
                        )
                    })}
                </ul>
                <div className="search-container">
                    <BsSearch className="icon"/>
                    <input type="text" name="search" placeholder="Search"/>
                </div>
                <ul className="icons-container">
                    <li><BsHeart /></li>
                    <li onClick={handleBasketVisibility}>
                        <BsBag />
                    </li>
                        {(itemCount > 0) && <div className="item-count">{itemCount}</div>}
                </ul>
            </nav>
            </div>
        </header>
    )
}
