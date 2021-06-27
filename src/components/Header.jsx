import React from 'react'
import AnnouncementBar from './AnnouncementBar'
import { DropdownMenu } from './DropdownMenu'
// import {showDropDownNavMenu} from '../utils'

export const Header = () => {
    return (
        <header>
            <AnnouncementBar />
            <nav className="navbar">
                <div className="logo">GOLDEN SHOE</div>
                <ul className="categories-container">
                    <li>Mens
                        <DropdownMenu />
                    </li>
                    <li>Womens</li>
                    <li>Kids</li>
                    <li>Sale</li>
                    <li>About</li>
                </ul>
                <div className="search-container">
                    <input type="text" name="search"/>
                </div>
                <ul className="icons-container">
                    <li>Wishlist</li>
                    <li>Basket</li>
                </ul>
            </nav>
        </header>
    )
}
