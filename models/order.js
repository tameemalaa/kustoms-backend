const { Sequelize, DataTypes } = require('sequelize');
const Customer = require('./customer');
const Address = require('./address');
const PromotionCode = require('./Promotion-code');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME,  process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
    });

const Order = sequelize.define('Order', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    customerID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Customer,
            key: 'id',
        }
    },  
    addressID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Address,
            key: 'id',
        }
    },
    totalBeforePromotion: {
    type: DataTypes.FLOAT,
    allowNull: false,
    },
    promotionCodeID: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: PromotionCode,
            key: 'id',
        }
    },
    totalAfterPromotion: {
        type: DataTypes.FLOAT,
        allowNull: false,
        },
});

module.exports = Order;