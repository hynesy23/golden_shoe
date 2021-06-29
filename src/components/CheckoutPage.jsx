import { useEffect, useState } from 'react';
import { formatPrices } from '../utils'

export const CheckoutPage = () => {

    const [basket, setBasket] = useState([]);
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const basket = JSON.parse( localStorage.getItem( 'basket' ) );
        if( basket )
        {
            setBasket(basket);
            let total = 0;
            const formattedItem = formatPrices( basket );
            formattedItem.forEach( item => {
                total += item.price;
            })
            setTotal( total );
        }
    }, [])
    
    useEffect(() => {
        const basket = JSON.parse( localStorage.getItem( 'basket' ) );
        setBasket( basket );
    }, [])

    return (
        <div className="page-container">
            <ul>
            {basket.length && basket.map( item => {
                return (
                <li>
                    <h2>{item.name}</h2>
                    <p>{item.price}</p>
                </li>
                )
            })}
            </ul>
            <div>Delivery: £{ total > 50 ? 0 : 7.50}</div>
            <div className="total">Total: £{ total > 50 ? total : total + 7.50}</div>

            <div>Delivery Details</div>
            <form action="" className="delivery-form">
                <input type="text" name="first_name" placeholder="First name"/>
                <input type="text" name="surname" placeholder="Surname"/>
                <input type="email" name="email" placeholder="Email"/>
                <input type="email" name="phone" placeholder="Phone"/>
                <input type="text" name="address_1" placeholder="Address line 1"/>
                <input type="text" name="address_2" placeholder="Address line 2"/>
                <input type="text" name="city" placeholder="City"/>
                <input type="text" name="postcode" placeholder="Postcode"/>
                <div>Billing Address same as Delivery Address?
                    <input type="checkbox" name="true" id="" />Yes
                    <input type="checkbox" name="false" id="" />No
                    </div>
                <button className="button" type="submit">SUBMIT</button>
            </form>
        </div>
    )
}
