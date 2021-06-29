import React from 'react';

import '../styles/footer.css'

import paymentMethods from '../images/payment_methods.PNG'

export const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-container-inner">
                <div className="tables-container">
                    <div>
                        Customer Service
                        <ul className="table-item">
                            <li>Returns Policy</li>
                            <li>FAQs</li>
                            <li>Store Locations</li>
                            <li>Pricacy Policy</li>
                            <li>Track Order</li>
                        </ul>
                    </div>
                    <div>
                        Information
                        <ul className="table-item">
                            <li>About Us</li>
                            <li>Jobs</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div></div>
                </div>
                <div className="newsletter-container">
                    <div>Sign up for our newsletter and be the first to hear about our exclusive deals!</div>
                    <div className="newsletter-container-inner">
                        <input className="newsletter-input" type="email" placeholder="Enter your email"/>
                        <button type="submit">Sign Me Up!</button>
                    </div>
                </div>
            </div>
            <div className="payment-icons"><img src={paymentMethods} alt="list of payment methods" /></div>
        </div>
    )
}
