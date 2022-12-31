const { DataTypes } = require('sequelize');
const Item = require('./item');
const Order = require('./order');
const sequelize = require('./database');

const OrderItem = sequelize.define('OrderItem', {
    orderID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: Order,
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
    price: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    numberOfItems: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
});

module.exports = OrderItem;