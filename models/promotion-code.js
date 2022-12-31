const { DataTypes } = require('sequelize');
const Customer = require('./customer');
const sequelize = require('./database');

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
            model: Customer,
            key: 'id',
        }
    }
    
});

module.exports = PromotionCode;