const fs = require('fs');
const path = require('path');
const { batchCount } = require('./utils.js');

let content = `DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS about_product;
DROP TABLE IF EXISTS related_products;

CREATE TABLE products (
  id SERIAL,
  brand VARCHAR(100) NOT NULL,
  is_prime BOOLEAN NOT NULL,
  price DECIMAL NOT NULL,
  product_name VARCHAR(200) NOT NULL,
  product_tier VARCHAR(50) NOT NULL,
  questions INTEGER NOT NULL,
  review_1 INTEGER DEFAULT 0,
  review_2 INTEGER DEFAULT 0,
  review_3 INTEGER DEFAULT 0,
  review_4 INTEGER DEFAULT 0,
  review_5 INTEGER DEFAULT 0,
  seller VARCHAR(50) NOT NULL,
  stock_count INTEGER NOT NULL,
  thumbnail VARCHAR(100) NOT NULL
);

CREATE TABLE about_product (
  id SERIAL NOT NULL,
  info TEXT NOT NULL,
  product_id INTEGER NOT NULL
);

CREATE TABLE related_products (
  id SERIAL NOT NULL,
  product_id INTEGER NOT NULL,
  related_id INTEGER NOT NULL
);
`;

for (let i = 0; i < batchCount; i++) {
  content += `
    COPY about_product FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/about_${i}.tsv' DELIMITER E'\\t';
    COPY products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/products_${i}.tsv' DELIMITER E'\\t';
    COPY related_products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/related_${i}.tsv' DELIMITER E'\\t';
    `;
}

fs.writeFile(path.join(__dirname, '../postgres-schema.sql'), content, 'utf8', (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('postgres-schema.sql written');
});
