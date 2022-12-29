const express = require('express');
const winston = require('winston');
const { Sequelize } = require('sequelize');
const dotenv=require('dotenv');

const app = express();
dotenv.config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME,  process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT
    });

sequelize.authenticate()
    .then(db => app.listen(process.env.PORT))
    .catch(err => console.error(err));

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' },
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
        ],
    });

if (process.NODE_ENV !== 'production') {
    logger.add(new winston.transports.Console({
        format: winston.format.simple(),
        }));
    }

app.use((req, res, next) => {
    logger.info(`${req.method} ${req.url}`);
    next();
});
