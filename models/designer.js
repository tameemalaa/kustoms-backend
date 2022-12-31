const { DataTypes } = require('sequelize');
const sequelize = require('./database');

const Designer = sequelize.define('Designer', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        unique: true,
        allowNull: false
    },
    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    NationalID: {
        type: DataTypes.INTEGER,
        unique: true,
        allowNull: true,
    }
});

module.exports= Designer;