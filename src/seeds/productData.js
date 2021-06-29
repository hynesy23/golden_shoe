const Product = require('../models/Products');

const productData = [
    {
        "name": "Cool Shoe Mens One",
        "price": 50.00,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        "category": "mens",
        "brand": "Nike",
        "stock": 3,
        "sizes": "8,9,10,11,12",
        "sale": true
    },
    {
        "name": "Cool Shoe Mens Two",
        "price": 80.00,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        "category": "mens",
        "brand": "Adidas",
        "stock": 3,
        "sale": true,
        "sizes": "8,9,10,11,12"
    },
    {
        "name": "Cool Shoe Mens Three",
        "price": 20.00,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        "category": "mens",
        "brand": "Reebok",
        "sale": false,
        "stock": 3,
        "sizes": "8,9,10,11,12"
    },
    {
        "name": "Cool Shoe Womens One",
        "price": 50.00,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        "category": "womens",
        "brand": "Nike",
        "sale": false,
        "stock": 3,
        "sizes": "4,5,6,7"
    },
    {
        "name": "Cool Shoe Womens Two",
        "price": 80.00,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        "category": "womens",
        "brand": "Adidas",
        "sale": true,
        "stock": 3,
        "sizes": "4,5,6,7"
    },
    {
        "name": "Cool Shoe Womens Three",
        "price": 20.00,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        "category": "mens",
        "brand": "Reebok",
        "stock": 3,
        "sizes": "4,5,6,7"
    },
    {
        "name": "Cool Shoe Kids One",
        "price": 50.00,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        "category": "kids",
        "brand": "Nike",
        "sale": true,
        "stock": 3,
        "sizes": "4,5,6,7"
    },
    {
        "name": "Cool Shoe Kids Two",
        "price": 80.00,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        "category": "kids",
        "brand": "Adidas",
        "sale": false,
        "stock": 3,
        "sizes": "4,5,6,7"
    },
    {
        "name": "Cool Shoe Kids Three",
        "price": 50.00,
        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur",
        "category": "mens",
        "brand": "Reebok",
        "sale": false,
        "stock": 3,
        "sizes": "4,5,6,7"
    }
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;