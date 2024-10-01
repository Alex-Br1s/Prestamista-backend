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
  pool: {
    max: 5, // Número máximo de conexiones
    min: 0, // Número mínimo de conexiones
    acquire: 30000, // Tiempo máximo para obtener una conexión
    idle: 10000 // Tiempo que una conexión puede estar inactiva antes de ser liberada
  },
  protocol: 'postgres',
  logging: false,
})

sequelize
  .authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida con éxito.');
  })
  .catch(err => {
    console.error('No se pudo conectar a la base de datos:', err);
  });

module.exports = sequelize;
