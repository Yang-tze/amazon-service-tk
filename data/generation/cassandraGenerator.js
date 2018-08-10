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
  product_name VARCHAR,
  brand VARCHAR,
  price DECIMAL,
  product_tier VARCHAR,
  is_prime BOOLEAN,
  stock_count INT,
  questions INT,
  seller VARCHAR,
  thumbnail VARCHAR,
  one_star_reviews INT,
  two_star_reviews INT,
  three_star_reviews INT,
  four_star_reviews INT,
  five_star_reviews INT
);

CREATE TABLE about_product (
  id INT PRIMARY KEY,
  product_id INT,
  info VARCHAR
);

CREATE TABLE related_products (
  id INT PRIMARY KEY,
  product_id INT,
  related_id INT
);
`;

for (let i = 0; i < batchCount; i++) {
  content += `
    COPY about_product FROM './generation/sampleData/about_${i}.tsv' DELIMITER E'\\t';
    COPY products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/products_${i}.tsv' DELIMITER E'\\t';
    COPY related_products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/related_${i}.tsv' DELIMITER E'\\t';
    `;
}

fs.writeFile(path.join(__dirname, '../cassandra-schema.cql'), content, 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('cassandra-schema.cql written');
});
