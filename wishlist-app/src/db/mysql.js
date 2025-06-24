const mysql = require('mysql2');

function connectToDatabase() {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mysql',
        database: 'wishlist'
    });
    return connection.promise();
}

module.exports = {
    connectToDatabase
};
