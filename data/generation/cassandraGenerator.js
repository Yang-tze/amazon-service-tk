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
  id INT,
  name VARCHAR,
  about list<TEXT>,
  brand VARCHAR,
  is_prime BOOLEAN,
  num_questions INT,
  price DECIMAL,
  product_tier VARCHAR,
  related_products list<INT>,
  review_totals list<INT>,
  seller_name VARCHAR,
  stock_count INT,
  thumbnail VARCHAR,
  PRIMARY KEY (id, name)
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
