import React from 'react'
import AnnouncementBar from './AnnouncementBar'
import { DropdownMenu } from './DropdownMenu'

import { BsBagFill, BsBag, BsFillHeartFill, BsHeart, BsSearch } from 'react-icons/bs';

export const Header = () => {
    return (
        <header>
            <AnnouncementBar />
            <nav className="navbar">
                <div className="logo">GOLDEN SHOE</div>
                <ul className="categories-container">
                    <li className="category-item">
                        <div className="header parent">Mens
                            <DropdownMenu className="dropdown-item"/>
                        </div>
                        {/* <DropdownMenu className="dropdown-item"/> */}
                    </li>
                    <li className="category-item">
                        <div className="header parent">Womens
                            <DropdownMenu className="dropdown-item"/>
                        </div>
                    </li>
                    <li className="category-item">
                        <div className="header parent">Kids
                            <DropdownMenu className="dropdown-item"/>
                        </div>
                    </li>
                    <li className="category-item">
                        <p className="header">Sale</p>
                    </li>
                    <li className="category-item">
                    <p className="header">About</p>
                    </li>
                </ul>
                <div className="search-container">
                    <BsSearch className="icon"/>
                    <input type="text" name="search"/>
                </div>
                <ul className="icons-container">
                    <li><BsFillHeartFill /></li>
                    <li><BsHeart /></li>
                    <li><BsBagFill /></li>
                    <li><BsBag /></li>
                </ul>
            </nav>
        </header>
    )
}
