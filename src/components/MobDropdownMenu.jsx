import React from 'react';

import { Link } from 'react-router-dom';

export const MobDropdownMenu = ({category}) => {
    return (
        <div className="dropdown-menu">
            <div className="dropdown-item">
                Shop by Type: 
                <ul>
                    <Link to={`${category}/shoes`}><li>{category} Shoes</li></Link>
                    <Link to={`${category}/slippers`}><li>{category} Slippers</li></Link>
                    <Link to={`${category}/sandals`}><li>{category} Sandals</li></Link>
                    <Link to={`${category}/boots`}><li>{category} Boots</li></Link>
                </ul>
            </div>
            <div className="dropdown-item">
                Shop by Brand:
                <ul>
                <li>Nike</li>
                <li>Puma</li>
                <li>Reebok</li>
                <li>Vans</li>
                </ul>
            </div>
        </div>
    )
}
