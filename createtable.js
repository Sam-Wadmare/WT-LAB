const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'testdb'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL!');

  const sql = `
    CREATE TABLE IF NOT EXISTS employees (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(100),
      dept VARCHAR(100),
      salary INT
    )
  `;

  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log("Table 'employees' created or already exists.");
    connection.end();
  });
});
