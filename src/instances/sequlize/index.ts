import * as Sequelize from 'sequelize'
const env = process.env.NODE_ENV || 'development';

// const config = require('./../../config/config.json')[env];
const config = require('../../../src/config/config.json')[env]

export const sequelize = new Sequelize.Sequelize(
    config.database, config.username, config.password, {
        host: config.host,
        dialect: config.dialect
    }
);

sequelize.authenticate()
export default sequelize;
