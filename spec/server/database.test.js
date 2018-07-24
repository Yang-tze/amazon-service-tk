const mysql = require('mysql');
const { getProduct } = require('../../server/database.js');
const { getRelated } = require('../../server/database.js');
const { getAll } = require('../../server/database.js');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'product_db',
});

// describe('');

connection.query('select id, name from products', (err, results) => {
  if (err) console.error(err);
  console.log(results);
});
// connection.query('INSERT INTO products (id, na)')
