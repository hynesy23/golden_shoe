import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import '../styles/collection.css'

import { getAllShoes } from '../api';

import { CollectionCard } from './CollectionCard';

import { formatPrices } from '../utils'

export const CollectionsPage = () => {

    const [shoes, setShoes] = useState([])
    const [filteredShoes, setFilteredShoes] = useState([])

    const location = useLocation();
    const category = location.pathname.split('/')[2];

    useEffect(() => {
        const fetchShoes = async() => {
            const shoes = await getAllShoes( category );
            setShoes(shoes)
        }
        fetchShoes();
    }, [])

    const handleFilter = (e) => {
        const target = e.target;
        const filter = target.dataset.filter;
        if( filter === "all" )
        {
            setFilteredShoes([])
        }
        else
        {
            const filteredShoes = shoes.filter( shoe => {
                return shoe.brand === filter
            })
            setFilteredShoes( filteredShoes );
        }
    }

    const handleSort = (e) => {
        const target = e.target;
        const sortBy = target.dataset.sort;

        console.log(sortBy)
        if( sortBy === "highest" )
        {
            const sortedShoes = [ ...shoes ].sort( (a, b) => {
                return a.price - b.price
            })
            setShoes( sortedShoes )
            console.log(shoes, 'shoes')
        }
        else
        {
            const sortedShoes = [ ...shoes ].sort( (a, b) => {
                return b.price - a.price
            })
            setShoes( sortedShoes )
        }
    }

    return (
        <div className="page-container">
            <p className="card-header">{category} Collection</p>
            <div className="card-container">
                <div className="filter-container">
                    <div className="filter-container-inner">
                        <div className="">
                            FILTER
                        </div>
                        <div className="item">Brand</div>
                        <ul className="filters">
                            <li data-filter="Nike" onClick={handleFilter}>Nike</li>
                            <li data-filter="Adidas" onClick={handleFilter}>Addidas</li>
                            <li data-filter="Reebok" onClick={handleFilter}>Reebok</li>
                            <li data-filter="all" onClick={handleFilter}>All</li>
                        </ul>
                    </div>
                    <div className="filter-container-inner">SORT
                        <div className="sorts" onClick={handleSort} data-sort="highest">Price: Highest</div>
                        <div className="sorts" onClick={handleSort} data-sort="lowest">Price: Lowest</div>
                    </div>
                </div>
                <div className="card-container-inner">
                    {filteredShoes.length ? filteredShoes.map( shoe => {
                        return (
                            <CollectionCard shoe={shoe} key={shoe.name}/>
                        )
                    }) : shoes && shoes.map( shoe => {
                        return (
                            <CollectionCard shoe={shoe} key={shoe.name}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
