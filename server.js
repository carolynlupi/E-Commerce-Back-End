const express = require('express');
const routes = require('./Develop/routes');
require('dotenv').config(); // Load environment variables from .env file

// Log the loaded environment variables for debugging
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_DATABASE:', process.env.DB_DATABASE);

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
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// Sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
