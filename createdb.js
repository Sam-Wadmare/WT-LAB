const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root' // replace with your MySQL root password
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL!');

  connection.query("CREATE DATABASE IF NOT EXISTS testdb", (err, result) => {
    if (err) throw err;
    console.log("Database 'testdb' created or already exists.");
    connection.end();
  });
});
