import { React, useState } from 'react'

import { Link } from 'react-router-dom';

import '../styles/header.css'

import AnnouncementBar from './AnnouncementBar'

import { BsBag, BsHeart, BsSearch } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MobNavMenu } from './MobNavMenu';

export const HeaderMob = ({handleBasketVisibility, itemCount}) => {

    const [showNav, setShowNav] = useState(false)

    const showNavMenu = () => {
        const mobNav = document.querySelector( ".mob-nav" );
        // const overlay = document.querySelector( ".overlay" );
        if( showNav )
        {
            setShowNav( false )
            // overlay.style.display = "none";
            mobNav.style.left = "-520px";
        }
        else
        {
            setShowNav( true )
            // overlay.style.display = "block";
            mobNav.style.left = "0";
        }
    }
    return (
        <header className="header-container-mob">
            <div>
            <AnnouncementBar />
            <MobNavMenu showNavMenu={showNavMenu}/>
            <nav className="mob-navbar">
                <div className="mob-navbar-inner">
                    <div className="burger-icon" onClick={showNavMenu}>
                        <GiHamburgerMenu />
                    </div>
                    <Link to="/"><div className="logo">GOLDEN SHOE</div></Link>
                    <ul className="icons-container">
                        {/* <li><BsFillHeartFill /></li> */}
                        <li><BsHeart /></li>
                        {/* <li><BsBagFill /></li> */}
                        <li onClick={handleBasketVisibility}>
                            <BsBag />
                        </li>
                            {(itemCount > 0) && <div className="item-count">{itemCount}</div>}
                    </ul>    
                </div>            
                <div className="search-container">
                    <BsSearch className="icon"/>
                    <input type="text" name="search" placeholder="Search"/>
                </div>
            </nav>
            </div>
        </header>
    )
}
