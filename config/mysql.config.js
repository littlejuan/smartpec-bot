const mysql = require('mysql');
const config = require('./config');

const connection = mysql.createConnection({
    host: config.dev.host,
    user: config.dev.user,
    password: config.dev.password,
    database: config.dev.db
});

module.exports = connection;