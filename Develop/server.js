const express = require('express');
const routes = require('./routes');
require('dotenv').config();

// Import sequelize connection
const Sequelize = require('sequelize');

// Use environment variables for database connection details
const { DB_HOST, DB_USER, DB_PASSWORD, DB_DATABASE } = process.env;

// Create a Sequelize instance with the environment variables
const sequelize = new Sequelize(DB_DATABASE, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  dialect: 'mysql',
  // ...other Sequelize options...
});

const app = express();
const PORT = process.env.PORT || 3306;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
