import React from 'react'

export const DropdownMenu = ({category}) => {
    return (
        <div className="dropdown-menu">
            <div className="dropdown-item">
                Category: 
                <ul>
                    <li>{category} Shoes</li>
                    <li>{category} Slippers</li>
                    <li>{category} Sandals</li>
                    <li>{category} Boots</li>
                </ul>
            </div>
            <div className="dropdown-item">
                Brands
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
