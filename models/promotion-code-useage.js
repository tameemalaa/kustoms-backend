const { Sequelize, DataTypes } = require('sequelize');
const Customer = require('./customer');
const PromotionCode = require('./Promotion-code');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME,  process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
    });

const PromotionCodeUsage = sequelize.define('PromotionCodeUsage', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    customerID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: Customer,
            key: 'id',
        }
    },  
    promotionCodeID: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: PromotionCode,
            key: 'id',
        }
    },
    useTimes: {
        type: DataTypes.INTEGER,
        allowNull: false,
        },
});

module.exports = PromotionCodeUsage;