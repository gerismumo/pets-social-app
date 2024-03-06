const mysql = require('mysql2/promise');
const dotenv = require('dotenv');
dotenv.config({path: '../.env'});

// const config = {
//     host: process.env.HOST,
//     user: process.env.USER,
//     password: process.env.PASSWORD,
//     database: process.env.DATABASE,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0,
// }

const config = {
    host: 'localhost',
    user: 'petpalsuser',
    password: 'petpalsuser',
    database: 'petpals',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
}

const pool = mysql.createPool(config);

pool.getConnection()
.then(connection => {
    console.log('Connected to database');
    connection.release();
})
.catch(err => {
    console.log('Failed to connect to database', err.message);
    process.exit(1);
})

module.exports = pool;