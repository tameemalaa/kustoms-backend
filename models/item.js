const { Sequelize, DataTypes } = require('sequelize');
const Designer = require('./designer');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME,  process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
    });

const Item = sequelize.define('Item', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        unique: true,
        primaryKey: true,
        allowNull: false
    },
    designerID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: Designer,
            key: 'id',
        }
    },
    title: {
    type: DataTypes.STRING,
    allowNull: false,
    },
    description: {
    type: DataTypes.TEXT,
    allowNull: false,
    },
    price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    },
    image: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});

module.exports = Item;