const fs = require('fs');
const path = require('path');
const { batchCount } = require('./utils.js');

let content = `DROP KEYSPACE IF EXISTS product_db;

CREATE KEYSPACE product_db
  WITH REPLICATION = { 'class' : 'SimpleStrategy', 'replication_factor' : 3 };

USE products_db;

DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS about_product;
DROP TABLE IF EXISTS related_products;

CREATE TABLE products (
  id INT PRIMARY KEY,
  brand VARCHAR,
  is_prime BOOLEAN,
  price DECIMAL,
  product_name VARCHAR,
  product_tier VARCHAR,
  questions INT,
  review_1 INT,
  review_2 INT,
  review_3 INT,
  review_4 INT,
  review_5 INT,
  seller VARCHAR,
  stock_count INT,
  thumbnail VARCHAR
);

CREATE TABLE about_product (
  id INT PRIMARY KEY,
  info TEXT,
  product_id INT
);

CREATE TABLE related_products (
  id INT PRIMARY KEY,
  product_id INT,
  related_id INT
);
`;

for (let i = 0; i < batchCount; i++) {
  content += `
    COPY about_product FROM './data/generation/sampleData/about_${i}.tsv' WITH DELIMITER='\\t';
    COPY products FROM './data/generation/sampleData/products_${i}.tsv' WITH DELIMITER='\\t';
    COPY related_products FROM './data/generation/sampleData/related_${i}.tsv' WITH DELIMITER='\\t';
    `;
}

fs.writeFile(path.join(__dirname, '../cassandra-schema.cql'), content, 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('cassandra-schema.cql written');
});
