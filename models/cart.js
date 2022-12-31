const { DataTypes } = require('sequelize');
const Customer = require('./customer');
const Item = require('./item');
const sequelize = require('./database');

const Cart = sequelize.define('Cart', {
    customerID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
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