const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'mysql',
    user: 'root',
    password: 'Vishnu@0108',
    database: 'companydb'
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('MySQL Connected');
    }
});

module.exports = connection;