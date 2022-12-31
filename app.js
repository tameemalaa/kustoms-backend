const express = require('express');
const winston = require('winston');
const dotenv=require('dotenv').config()
const sequelize = require('./models/database');
const db = require('./models/index')
const app = express();

sequelize.authenticate()
    .then(db => {
        app.listen(process.env.PORT)
        // sequelize.sync()
    })
    .catch(err => console.error(err));

    app.use(express.json())

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

