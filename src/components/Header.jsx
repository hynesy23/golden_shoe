import { React, useState, useEffect } from 'react'

import { Link } from 'react-router-dom';

import AnnouncementBar from './AnnouncementBar'
import { DropdownMenu } from './DropdownMenu'
import { Basket } from './Basket';
import {showDropDownMenu} from '../utils'

import { BsBagFill, BsBag, BsFillHeartFill, BsHeart, BsSearch } from 'react-icons/bs';

export const Header = () => {

    const [showBasket, setshowBasket] = useState(false)

    const handleBasketVisibility = () => {
        console.log('basket clicked', showBasket)
        const basket = document.querySelector( ".basket-container" );
        if( showBasket )
        {
            setshowBasket( false )
            basket.style.right = "-520px";
        }
        else
        {
            setshowBasket( true )
            basket.style.right = "0";
        }
    }
    return (
        <header className="header-container">
            <div>
            <Basket handleBasketVisibility={handleBasketVisibility}/>
            <AnnouncementBar />
            <nav className="navbar">
                <Link to="/"><div className="logo">GOLDEN SHOE</div></Link>
                <ul className="categories-container">
                    <li className="category-item">
                        <div className="cat-header parent" onClick={showDropDownMenu}>Mens
                            <DropdownMenu className="dropdown-item" category={"Mens"}/>
                        </div>
                        {/* <DropdownMenu className="dropdown-item"/> */}
                    </li>
                    <li className="category-item">
                        <div className="cat-header parent" onClick={showDropDownMenu}>Womens
                            <DropdownMenu className="dropdown-item" category={"Womens"}/>
                        </div>
                    </li>
                    <li className="category-item">
                        <div className="cat-header parent" onClick={showDropDownMenu}>Kids
                            <DropdownMenu className="dropdown-item" category={"Kids"}/>
                        </div>
                    </li>
                    <li className="category-item">
                        <p className="cat-header">Sale</p>
                    </li>
                    <li className="category-item">
                    <p className="cat-header">About</p>
                    </li>
                </ul>
                <div className="search-container">
                    <BsSearch className="icon"/>
                    <input type="text" name="search" placeholder="Search"/>
                </div>
                <ul className="icons-container">
                    {/* <li><BsFillHeartFill /></li> */}
                    <li><BsHeart /></li>
                    {/* <li><BsBagFill /></li> */}
                    <li onClick={handleBasketVisibility}><BsBag /></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}
