import React from 'react'
import SaleBlock from './SaleBlock'
import CollectionList from './CollectionList';
import {ShoesDiaries} from './ShoesDiaries';

import '../styles/homepage.css'

export const Homepage = () => {
    return (
        <div className="page-container">
            {/* <div className="collections-slider"></div> */}
            <SaleBlock />
            <CollectionList />
            <ShoesDiaries />
        </div>
    )
}
