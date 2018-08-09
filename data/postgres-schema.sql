DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS related_products;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  brand VARCHAR(100) NOT NULL,
  product_tier VARCHAR(50) NOT NULL,
  price INTEGER NOT NULL,
  is_prime BOOLEAN NOT NULL,
  stock_count INTEGER NOT NULL,
  questions INTEGER NOT NULL,
  seller VARCHAR(50) NOT NULL,
  thumbnail TEXT NOT NULL
);

CREATE TABLE reviews (
  id SERIAL,
  product_id INTEGER NOT NULL,
  one_star INTEGER NOT NULL,
  two_star INTEGER NOT NULL,
  three_star INTEGER NOT NULL,
  four_star INTEGER NOT NULL,
  five_star INTEGER NOT NULL
);

CREATE TABLE about (
  id SERIAL,
  product_id INTEGER NOT NULL,
  info VARCHAR(150) NOT NULL,
);

CREATE TABLE related_products (
  id SERIAL PRIMARY KEY,
  product_id INTEGER NOT NULL,
  related_id INTEGER NOT NULL
);

COPY products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/products_0.tsv' DELIMITER E'\t';
