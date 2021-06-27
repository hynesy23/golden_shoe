import React from 'react'
import SaleBlock from './SaleBlock'
import CollectionList from './CollectionList';

export const Homepage = () => {
    return (
        <div className="homepage-container">
            {/* <div className="collections-slider"></div> */}
            <SaleBlock />
            <CollectionList />
        </div>
    )
}
