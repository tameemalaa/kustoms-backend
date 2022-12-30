const { Sequelize, DataTypes } = require('sequelize');
const Customer = require('./customer');
const Item = require('./item');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME,  process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
    });

const Cart = sequelize.define('Cart', {
    customerID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: Customer,
            key: 'id',
        }
    },
    itemID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: Item,
            key: 'id',
        }
    },
    numberOfItems: {
    type: DataTypes.INTEGER,
    allowNull: false,
    },
    
});

module.exports = Cart;