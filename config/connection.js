require('dotenv').config();

const Sequelize = require('sequelize');

const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
      host: 'localhost',
      port: 8889,
      dialect: 'mysql',
      database: process.env.DB_NAME,
      dialectOptions: {
        decimalNumbers: true,
      },
    });

module.exports = sequelize;
