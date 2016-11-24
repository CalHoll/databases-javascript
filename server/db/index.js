var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".

var connection = mysql.createConnection({
  host: 'localhost',  // this is default
  user: 'root',
  password: '',
  database: 'chat'
});                   // adding an option for port: 3000 breaks the test, why?

connection.connect();

module.exports = connection;
