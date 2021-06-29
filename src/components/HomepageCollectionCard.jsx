import React from 'react';
import { Link } from 'react-router-dom';

export const HomepageCollectionCard = ({ category }) => {
    return (
        <div className="collection-item" key={category.name}>
            <img src={category.image} alt={category.name} />
            <div className="textbox">
                <div className="name">{category.name}</div>
                <Link className="cta" to={`collections/${category.link}`}>
                    <div>{category.cta}</div>
                </Link>
            </div>
        </div>
    )
}
