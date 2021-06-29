import { formatPrices } from '../utils'
const axios = require('axios');

export const getAllShoes = async (category) => {
    const { data } = await axios.get(`http://localhost:8080/collections/${category}`);
    const formattedShoes = formatPrices( data )
    return formattedShoes;
}

export const getSingleShoe = async (shoeId) => {
    const { data } = await axios.get(`http://localhost:8080/products/${shoeId}`);
    return data;
}