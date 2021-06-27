import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import getAllShoes from '../api';

import { CollectionCard } from './CollectionCard';

export const CollectionsPage = () => {

    const [shoes, setShoes] = useState([])

    useEffect(() => {
        const shoes = getAllShoes();
        setShoes(shoes)
    }, [])

    const location = useLocation();
    const category = location.pathname.split('/')[1];
    return (
        <div className="homepage-container">
            <div className="card-container">
                <p className="card-header">{category} Collection</p>
                    <div className="card-container-inner">
                    {shoes && shoes.map( shoe => {
                        return (
                            <CollectionCard shoe={shoe} key={shoe.name}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
