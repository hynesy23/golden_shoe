import React from 'react'

export const HomepageCollectionCard = ({ category}) => {
    return (
        <div className="collection-item" key={category.name}>
            <img src={category.image} alt={category.name} />
            <div className="textbox">
                <div className="name">{category.name}</div>
                <div className="cta">{category.cta}</div>
            </div>
        </div>
    )
}
