import { React, useState, useEffect } from 'react'

import { Link } from 'react-router-dom';

import '../styles/header.css'

import AnnouncementBar from './AnnouncementBar'
import { DropdownMenu } from './DropdownMenu'
import {showDropDownMenu} from '../utils'

import { BsBag, BsHeart, BsSearch } from 'react-icons/bs';

export const Header = ({handleBasketVisibility }) => {

    const [itemCount, setItemCount] = useState(0)

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
                    <li className="category-item">
                        <div className="cat-header parent" onClick={showDropDownMenu}>Mens
                            <DropdownMenu className="dropdown-item" category={"Mens"}/>
                        </div>
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
                    <div className="cat-header parent" onClick={showDropDownMenu}>All
                        <DropdownMenu className="dropdown-item" category={"All"}/>
                    </div>
                    </li>
                    <li className="category-item">
                        <p className="cat-header">Sale</p>
                    </li>
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
