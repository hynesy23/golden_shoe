// const shoeData = require('../db/products.json');
import { formatPrices } from '../utils'
const axios = require('axios');

export const getAllShoes = async (category) => {
    const { data } = await axios.get(`http://localhost:8080/collections/${category}`);
    const formattedShoes = formatPrices( data )
    return formattedShoes;
}

export const getSingleShoe = async (shoeId) => {
    console.log(shoeId, 'shoe ID')
    // return shoeData;
    const { data } = await axios.get(`http://localhost:8080/products/${shoeId}`);
    console.log(data, 'response log');
    return data;
    // return data;
}