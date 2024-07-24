// db/database.js
const { Sequelize } = require('sequelize');
const config = require('../config/config');

const sequelize = new Sequelize(
  config.development.database,
  config.development.username,
  config.development.password,

  {
    host: config.development.host,
    dialect: config.development.dialect,
    logging: false,
  },
);

sequelize
  .authenticate()
  .then(() => {
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

module.exports = sequelize;
