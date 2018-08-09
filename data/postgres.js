const { Pool } = require('pg');

const pool = new Pool({
  // host: 'database.server.com',
  // user: 'dbuser',
  // password: '',
  database: 'product_db',
  port: 5432,
});

pool.query('SELECT * FROM products WHERE id = 1000000', (err, res) => {
  console.log(err, res);
  pool.end();
});

module.exports = pool;
