var mysql = require('mysql');

// buat koneksi database
const conn = mysql.createConnection({
    host: 'localhost:8080',
    user: 'root',
    password: '',
    database: 'phpmvc'
});

conn.connect((err) => {
    if (err) throw err;
    console.log('Mysql terkoneksi');
});

module.exports = conn;