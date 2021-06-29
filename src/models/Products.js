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
              type: DataTypes.INTEGER,
              allowNull: false
          },
          description: {
              type: DataTypes.STRING,
              allowNull: false
          },
          quantity: {
              type: DataTypes.INTEGER,
              allowNull: false
          },
          category: {
              type: DataTypes.STRING,
              allowNull: false
          },
          brand: {
              type: DataTypes.INTEGER,
              allowNull: false
          }
    }
)