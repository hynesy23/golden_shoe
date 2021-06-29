import React from 'react';
import { MobDropdownMenu } from './MobDropdownMenu';
import {showDropDownMenu} from '../utils';

import {RiCloseFill} from 'react-icons/ri';

export const MobNavMenu = ({ showNavMenu }) => {

    const showMobDropDownMenu = () => {
        return "";
    }
    return (
        <div className="mob-nav">
            <ul className="categories-container mob-nav-inner">
            <div className="icon" onClick={showNavMenu}>
                    <RiCloseFill />
                </div>
                <li className="category-item">
                    <div className="cat-header parent" onClick={showMobDropDownMenu}>Mens
                        <MobDropdownMenu className="dropdown-item" category={"Mens"}/>
                    </div>
                    {/* <MobDropdownMenu className="dropdown-item"/> */}
                </li>
                <li className="category-item">
                    <div className="cat-header parent" onClick={showMobDropDownMenu}>Womens
                        <MobDropdownMenu className="dropdown-item" category={"Womens"}/>
                    </div>
                </li>
                <li className="category-item">
                    <div className="cat-header parent" onClick={showMobDropDownMenu}>Kids
                        <MobDropdownMenu className="dropdown-item" category={"Kids"}/>
                    </div>
                </li>
                <li className="category-item">
                <div className="cat-header parent" onClick={showMobDropDownMenu}>All
                    <MobDropdownMenu className="dropdown-item" category={"All"}/>
                </div>
                </li>
                <li className="category-item">
                    <p className="cat-header">Sale</p>
                </li>
            </ul>
        </div>
    )
}
