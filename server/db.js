const mysql = require('mysql')

const pool = mysql.createPool ({
    connectionLimit: 10,
    user: 'root',
    password: '',
    database: 'homeless_shelters',
    host: 'localhost'
})

module.exports = pool