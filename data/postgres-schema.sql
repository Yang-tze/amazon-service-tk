DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS related_products;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  brand VARCHAR(100) NOT NULL,
  tier VARCHAR(50) NOT NULL,
  -- options JSON NOT NULL,
  -- price JSON NOT NULL,
  -- about JSON NOT NULL,
  is_prime BOOLEAN NOT NULL,
  stock_count INTEGER NOT NULL,
  -- reviews JSON NOT NULL,
  questions INTEGER NOT NULL,
  seller VARCHAR(150) NOT NULL,
  thumbnail TEXT NOT NULL
);

CREATE TABLE related_products (
  id SERIAL PRIMARY KEY,
  product_id INTEGER NOT NULL,
  related_id INTEGER NOT NULL
);

COPY products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/products_0.tsv' DELIMITER E'\t';
