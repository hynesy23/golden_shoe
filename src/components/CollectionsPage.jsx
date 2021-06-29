import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import '../styles/collection.css'

import {getAllShoes} from '../api';

import { CollectionCard } from './CollectionCard';

export const CollectionsPage = () => {

    const [shoes, setShoes] = useState([])

    const location = useLocation();
    const category = location.pathname.split('/')[2];

    useEffect(() => {
        const fetchShoes = async() => {
            const shoes = await getAllShoes( category );
            setShoes(shoes)
        }
        fetchShoes();
    }, [])

    return (
        <div className="page-container">
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
