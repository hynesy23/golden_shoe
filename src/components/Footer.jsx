import React from 'react'

export const Footer = () => {
    return (
        <div className="footer-container">
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
                        <li></li>
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
    )
}
