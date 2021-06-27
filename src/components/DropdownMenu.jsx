import React from 'react'

export const DropdownMenu = () => {
    return (
        <div className="dropdown-menu">
            <div>
                Categories
                <ul>
                    <li>Shoes</li>
                    <li>Slippers</li>
                    <li>Sandals</li>
                    <li>Boots</li>
                </ul>
            </div>
            <div>
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
