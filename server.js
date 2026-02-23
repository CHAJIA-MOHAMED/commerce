const mysql = require('mysql');
require("dotenv").config();
const express = require('express');
const cors = require('cors'); // باش JS ف browser يقدر يدير fetch
const app = express();
const port = 3000;

app.use(cors());
app.use(express.static('public'));

const db = mysql.createConnection({
  host: process.env.MYSQLHOST ,
  user: process.env.MYSQLUSER,
  password: MYSQL_ROOT_PASSWORD,
  database: MYSQLDATABASE
});

db.connect(err => {
  if(err) throw err;
  console.log('Connected to MySQL!');
});

app.get('/api/products', (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if(err) return res.status(500).send(err);
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
