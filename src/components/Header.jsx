import React from 'react'
import AnnouncementBar from './AnnouncementBar'
import { DropdownMenu } from './DropdownMenu'
import showDropDownMenu from '../utils'

import { BsBagFill, BsBag, BsFillHeartFill, BsHeart, BsSearch } from 'react-icons/bs';

export const Header = () => {
    return (
        <header className="header">
            <div>
            <AnnouncementBar />
            <nav className="navbar">
                <div className="logo">GOLDEN SHOE</div>
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
                    <li><BsFillHeartFill /></li>
                    <li><BsHeart /></li>
                    <li><BsBagFill /></li>
                    <li><BsBag /></li>
                </ul>
            </nav>
            </div>
        </header>
    )
}
