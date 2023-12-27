const mysql = require('mysql')

const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'node_test'
    }
)

connection.connect( (err) => {
    if (err) {
        return console.log('error: ' + err.message)
    } else {
        console.log('Connected to Database');
    }
});

module.exports = connection