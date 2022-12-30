const { Sequelize, DataTypes } = require('sequelize');
const User = require('./user');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME,  process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
    });

const PromotionCode = sequelize.define('PromotionCode', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
        allowNull: false
    },
    minimumPaymentLimit: {
        type: DataTypes.FLOAT,
        allowNull: false,
    },
    maximumDiscountLimit: {
    type: DataTypes.FLOAT,
    allowNull: false,
    },
    rawDiscountAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
    },
    percentageDiscountAmount: {
    type: DataTypes.FLOAT,
    allowNull: false,
    },
    maximumUseTimesLimitPerUser: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    maximumUseTimesLimitUniversal: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    referrerID:{        
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
            model: User,
            key: 'id',
        }
    }
    
});

module.exports = PromotionCode;