const { DataTypes } = require('sequelize');
const Customer = require('./customer');
const PromotionCode = require('./Promotion-code');
const sequelize = require('./database');

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