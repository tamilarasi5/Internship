const pgp = require('pg-promise')();
const db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'formdb',
    user: 'yourUsername', // Replace with your PostgreSQL username
    password: 'yourPassword' // Replace with your PostgreSQL password
});

module.exports = db;