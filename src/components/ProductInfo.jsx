import React from 'react'

export const ProductInfo = ({description}) => {

    const showTab = (e) => {
        const target = e.target;
        console.log(target)

        const navs = document.querySelectorAll( ".nav" );

        for( let i = 0; i < navs.length; i++ )
        {
            const nav = navs[ i ];
            nav.classList.remove( "active" );
        }

        target.classList.add( "active" );

        const tabs = document.querySelectorAll( ".tab-container" );

        for( let i = 0; i < tabs.length; i++ )
        {
            const tab = tabs[ i ];
            tab.classList.remove( "active" );
            
            if( tab.dataset.name === target.dataset.name )
            {
                tab.classList.add( "active" );
            }
        }
    }
    return (
        <div className="product-info-container">
            <div className="product-info-container-nav">
                <div onClick={showTab} className="active nav" data-name="prod-desc">Product Description</div>
                <div onClick={showTab} className="nav" data-name="delret">Delivery & Returns</div>
                <div onClick={showTab} className="nav" data-name="reviews">Reviews</div>
            </div>
            <div className="tab-container active" data-name="prod-desc">{description}</div>
            <div className="tab-container" data-name="delret"></div>
            <div className="tab-container" data-name="reviews"></div>
        </div>
    )
}
