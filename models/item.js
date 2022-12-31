const { DataTypes } = require('sequelize');
const Designer = require('./designer');
const sequelize = require('./database');

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