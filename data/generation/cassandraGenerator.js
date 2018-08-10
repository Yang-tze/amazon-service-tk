const fs = require('fs');
const path = require('path');
const { productCount, batchCount } = require('./utils.js');

let content = `DROP KEYSPACE IF EXISTS product_db;

CREATE KEYSPACE product_db
  WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 3 };

USE product_db;

DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS about_product;
DROP TABLE IF EXISTS related_products;

CREATE TABLE products (
  id INT PRIMARY KEY,
  about list<TEXT>,
  brand VARCHAR,
  is_prime BOOLEAN,
  price DECIMAL,
  product_name VARCHAR,
  product_tier VARCHAR,
  questions INT,
  related list<INT>,
  reviews list<INT>,
  seller VARCHAR,
  stock_count INT,
  thumbnail VARCHAR
);
`;

for (let i = 0; i < batchCount; i++) {
  content += `
    COPY products FROM './data/generation/sampleData/denormalized_${i}.tsv' WITH DELIMITER='\\t';
    `;
}

fs.writeFile(path.join(__dirname, '../cassandra-schema.cql'), content, 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('cassandra-schema.cql written');
});
