const mysql = require('mysql2');
const { createSchema } = require('../helpers/dataHelper')

const con = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASS,
    database: process.env.MYSQL_DB,
    port: process.env.MYSQL_PORT || 3306,
    multipleStatements: true,
    enableKeepAlive: true,
    keepAliveInitialDelay: 300000
});

con.getConnection(async function (err, connection) {
    if (err) {
        console.log('MySQL Connection Error: ', err);
    }
    await createSchema(con, connection);
    console.log('MySQL Connection Opened');
    setInterval(function () {
        connection.ping();
        console.log('MySQL Connection Pinged')
    }, 300000);
});

con.on('connection', function (err) {
    console.log('MySQL Connection Established');
});

con.on('error', function (err) {
    console.log('MySQL Connection Error: ', err);
});

con.on('close', function (err) {
    console.log('MySQL Connection Closed', err);
});

con.on('release', function (connection) {
    console.log('MySQL Connection Released at threadId: ', connection.threadId);
});

module.exports = con;