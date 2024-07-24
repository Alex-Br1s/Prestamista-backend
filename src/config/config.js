const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') });


module.exports = {
    development: {
        username: process.env.USER_NAME,
        password: process.env.DATABASE_PASSWORD,
        database: 'prestamista',
        host: "127.0.0.1",
        dialect: "postgres"
    }
}

