const { Pool } = require('pg');

const pool = new Pool({
  // host: 'database.server.com',
  // user: 'dbuser',
  // password: '',
  database: 'product_db',
  port: 5432,
});

module.exports = pool;
