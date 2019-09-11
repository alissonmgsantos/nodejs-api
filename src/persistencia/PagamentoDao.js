const mysql = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'nodejsapi'
    });
}

module.exports = function () {
    return createDBConnection;
}