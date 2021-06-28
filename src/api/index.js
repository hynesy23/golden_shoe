const shoeData = require('../db/products.json');

export const getAllShoes = () => {
    return shoeData;
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