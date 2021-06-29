// const shoeData = require('../db/products.json');
const axios = require('axios');

export const getAllShoes = async (category) => {
    const { data } = await axios.get(`http://localhost:8080/collections/${category}`);
    return data;
}

export const getSingleShoe = async (shoeId) => {
    console.log(shoeId, 'shoe ID')
    // return shoeData;
    const { data } = await axios.get(`http://localhost:8080/products/${shoeId}`);
    console.log(data, 'response log');
    return data;
    // return data;
}