const Product = require('../models/Products');
const { Op } = require("sequelize");

const getAllShoes = async (req, res) => {
    console.log('getAllShoes called')
    const { category } = req.params
    try 
    {
        let productsRaw;
        if( category === "all" )
        {
            productsRaw = await Product.findAll({})
        }
        else
        {
            productsRaw = await Product.findAll({
                where: {
                    category: {
                      [Op.like]: `%${category}%`,
                    },
                  },
            })
        }
        const products = productsRaw.map( product => {
            return product.get({ plain: true })
        }); 
        products.forEach( product => {
            product.sizes = product.sizes.split(",")
            return product;
        })
        res.status(200).json(products)
    } 
    catch(error) 
    {
        console.log(error, 'ERROR')
        res.status(500).json(error)
    }
}

const getSingleShoe = async (req, res) => {
    const { shoeId: id } = req.params;
    try 
    {
        const shoeRaw = await Product.findByPk( id );
        const shoe = shoeRaw.get({ plain: true });
        shoe.sizes = shoe.sizes.split(",")

        res.status(200).json(shoe)
    } 
    catch(error) 
    {
        console.log(error, 'ERROR')
        res.status(500).json(error)
    }
}

module.exports = {getAllShoes, getSingleShoe}