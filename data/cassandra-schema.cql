DROP KEYSPACE IF EXISTS product_db;

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

    COPY about_product FROM './generation/sampleData/about_0.tsv' DELIMITER E'\t';
    COPY products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/products_0.tsv' DELIMITER E'\t';
    COPY related_products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/related_0.tsv' DELIMITER E'\t';
    
    COPY about_product FROM './generation/sampleData/about_1.tsv' DELIMITER E'\t';
    COPY products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/products_1.tsv' DELIMITER E'\t';
    COPY related_products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/related_1.tsv' DELIMITER E'\t';
    
    COPY about_product FROM './generation/sampleData/about_2.tsv' DELIMITER E'\t';
    COPY products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/products_2.tsv' DELIMITER E'\t';
    COPY related_products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/related_2.tsv' DELIMITER E'\t';
    
    COPY about_product FROM './generation/sampleData/about_3.tsv' DELIMITER E'\t';
    COPY products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/products_3.tsv' DELIMITER E'\t';
    COPY related_products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/related_3.tsv' DELIMITER E'\t';
    
    COPY about_product FROM './generation/sampleData/about_4.tsv' DELIMITER E'\t';
    COPY products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/products_4.tsv' DELIMITER E'\t';
    COPY related_products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/related_4.tsv' DELIMITER E'\t';
    
    COPY about_product FROM './generation/sampleData/about_5.tsv' DELIMITER E'\t';
    COPY products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/products_5.tsv' DELIMITER E'\t';
    COPY related_products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/related_5.tsv' DELIMITER E'\t';
    
    COPY about_product FROM './generation/sampleData/about_6.tsv' DELIMITER E'\t';
    COPY products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/products_6.tsv' DELIMITER E'\t';
    COPY related_products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/related_6.tsv' DELIMITER E'\t';
    
    COPY about_product FROM './generation/sampleData/about_7.tsv' DELIMITER E'\t';
    COPY products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/products_7.tsv' DELIMITER E'\t';
    COPY related_products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/related_7.tsv' DELIMITER E'\t';
    
    COPY about_product FROM './generation/sampleData/about_8.tsv' DELIMITER E'\t';
    COPY products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/products_8.tsv' DELIMITER E'\t';
    COPY related_products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/related_8.tsv' DELIMITER E'\t';
    
    COPY about_product FROM './generation/sampleData/about_9.tsv' DELIMITER E'\t';
    COPY products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/products_9.tsv' DELIMITER E'\t';
    COPY related_products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/related_9.tsv' DELIMITER E'\t';
    