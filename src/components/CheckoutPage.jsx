import { useEffect, useState } from 'react';

export const CheckoutPage = () => {

    const [basket, setBasket] = useState([]);
    
    useEffect(() => {
        const basket = JSON.parse( localStorage.getItem( 'basket' ) );
        setBasket( basket );
    }, [])

    return (
        <div className="page-container">
            <h1>I am the checkout page</h1>
            {basket.length && basket.map( item => {
                return <h1>{item.name}</h1>
            })}
        </div>
    )
}
