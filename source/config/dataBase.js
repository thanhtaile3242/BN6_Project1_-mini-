const mysql = require("mysql2/promise")
const connection = mysql.createConnection({
        host: 'localhost',
        port: '3306',
        password: '123456789',
        user: 'root',
        database: 'user-Project1'
    });
module.exports = connection;
