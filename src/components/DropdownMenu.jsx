import React from 'react';

import { Link } from 'react-router-dom';

export const DropdownMenu = ({category}) => {
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
                <Link><li>Nike</li></Link>
                <Link><li>Puma</li></Link>
                <Link><li>Reebok</li></Link>
                <Link><li>Vans</li></Link>
                </ul>
            </div>
        </div>
    )
}
