DROP KEYSPACE IF EXISTS product_db;

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

    COPY about_product FROM './data/generation/sampleData/about_0.tsv' WITH DELIMITER='\t';
    COPY products FROM './data/generation/sampleData/products_0.tsv' WITH DELIMITER='\t';
    COPY related_products FROM './data/generation/sampleData/related_0.tsv' WITH DELIMITER='\t';
    
    COPY about_product FROM './data/generation/sampleData/about_1.tsv' WITH DELIMITER='\t';
    COPY products FROM './data/generation/sampleData/products_1.tsv' WITH DELIMITER='\t';
    COPY related_products FROM './data/generation/sampleData/related_1.tsv' WITH DELIMITER='\t';
    
    COPY about_product FROM './data/generation/sampleData/about_2.tsv' WITH DELIMITER='\t';
    COPY products FROM './data/generation/sampleData/products_2.tsv' WITH DELIMITER='\t';
    COPY related_products FROM './data/generation/sampleData/related_2.tsv' WITH DELIMITER='\t';
    
    COPY about_product FROM './data/generation/sampleData/about_3.tsv' WITH DELIMITER='\t';
    COPY products FROM './data/generation/sampleData/products_3.tsv' WITH DELIMITER='\t';
    COPY related_products FROM './data/generation/sampleData/related_3.tsv' WITH DELIMITER='\t';
    
    COPY about_product FROM './data/generation/sampleData/about_4.tsv' WITH DELIMITER='\t';
    COPY products FROM './data/generation/sampleData/products_4.tsv' WITH DELIMITER='\t';
    COPY related_products FROM './data/generation/sampleData/related_4.tsv' WITH DELIMITER='\t';
    
    COPY about_product FROM './data/generation/sampleData/about_5.tsv' WITH DELIMITER='\t';
    COPY products FROM './data/generation/sampleData/products_5.tsv' WITH DELIMITER='\t';
    COPY related_products FROM './data/generation/sampleData/related_5.tsv' WITH DELIMITER='\t';
    
    COPY about_product FROM './data/generation/sampleData/about_6.tsv' WITH DELIMITER='\t';
    COPY products FROM './data/generation/sampleData/products_6.tsv' WITH DELIMITER='\t';
    COPY related_products FROM './data/generation/sampleData/related_6.tsv' WITH DELIMITER='\t';
    
    COPY about_product FROM './data/generation/sampleData/about_7.tsv' WITH DELIMITER='\t';
    COPY products FROM './data/generation/sampleData/products_7.tsv' WITH DELIMITER='\t';
    COPY related_products FROM './data/generation/sampleData/related_7.tsv' WITH DELIMITER='\t';
    
    COPY about_product FROM './data/generation/sampleData/about_8.tsv' WITH DELIMITER='\t';
    COPY products FROM './data/generation/sampleData/products_8.tsv' WITH DELIMITER='\t';
    COPY related_products FROM './data/generation/sampleData/related_8.tsv' WITH DELIMITER='\t';
    
    COPY about_product FROM './data/generation/sampleData/about_9.tsv' WITH DELIMITER='\t';
    COPY products FROM './data/generation/sampleData/products_9.tsv' WITH DELIMITER='\t';
    COPY related_products FROM './data/generation/sampleData/related_9.tsv' WITH DELIMITER='\t';
    