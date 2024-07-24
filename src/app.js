const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const morgan = require('morgan')
const sequelize = require('./db/database')
const route = require('./routes/route')


dotenv.config()
const port = process.env.PORT || 3002
const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use('/', route)

sequelize.sync() //?force: true elimina la tabla existente y la vuelve a crear.
/*.then(() => {
    console.log('La base de datos y las tablas han sido sincronizadas.');
})
  .catch(err => {
    console.error('Error al sincronizar la base de datos:', err);
});*/

app.listen(port, () => {
    console.log('Listening on port ' + port)
})