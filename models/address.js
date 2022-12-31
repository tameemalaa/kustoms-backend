const { DataTypes } = require('sequelize');
const Customer = require('./customer');
const sequelize = require('./database');

const Address = sequelize.define('Address', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        unique: true,
        autoIncrement: true
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
    phone: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
        
    },
    governorate: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    streetName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    buildingNameOrNumber: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    floorOrApartment: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nearestLandmark:{
        type: DataTypes.STRING,
        allowNull: true,
    },
    addressType:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
});

module.exports = Address;