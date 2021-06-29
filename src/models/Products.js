const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Product extends Model {}

Product.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          price: {
              type: DataTypes.DECIMAL,
              allowNull: false
          },
          description: {
              type: DataTypes.STRING(500),
              allowNull: false
          },
          stock: {
              type: DataTypes.INTEGER,
              allowNull: false
          },
          category: {
              type: DataTypes.STRING,
              allowNull: false
          },
          brand: {
              type: DataTypes.STRING,
              allowNull: false
          },
          sizes: {
              type: DataTypes.STRING,
              allowNull: false
          },
          sale: {
              type: DataTypes.BOOLEAN,
              allowNull: true
          }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'shoe',
    }
)

module.exports = Product;