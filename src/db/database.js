const path = require('path'); 
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });
const { Sequelize } = require('sequelize');

console.log('DATABASE_URL:', process.env.DATABASE_URL);

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Para evitar errores de SSL en algunas configuraciones
    },
  },
  protocol: 'postgres',
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida con éxito.');
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

module.exports = sequelize;
