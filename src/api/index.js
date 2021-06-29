const shoeData = require('../db/products.json');
const axios = require('axios');

export const getAllShoes = async () => {
    // return shoeData;
    const response = await axios.get("http://localhost:8080");
}

export const getSingleShoe = (shoeName) => {
    const shoe = shoeData.find( shoe => shoe.name === shoeName );
    console.log(shoe, 'SHOE???')
    console.log(shoe.sizes, 'sizes')
    if( shoe )
    {
        shoe.sizes = shoe.sizes.split(",");
        return shoe;
    }
}