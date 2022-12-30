const { Sequelize, DataTypes } = require('sequelize');
const Item = require('./item');
const Order = require('./order');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME,  process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
    });

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