DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS about_product;
DROP TABLE IF EXISTS product_reviews;
DROP TABLE IF EXISTS related_products;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
  name VARCHAR(200) NOT NULL,
  brand VARCHAR(100) NOT NULL,
  price DECIMAL NOT NULL,
  product_tier VARCHAR(50) NOT NULL,
  is_prime BOOLEAN NOT NULL,
  stock_count INTEGER NOT NULL,
  questions INTEGER NOT NULL,
  seller VARCHAR(50) NOT NULL,
  thumbnail TEXT NOT NULL
);

CREATE TABLE product_reviews (
  product_id INTEGER NOT NULL,
  one_star INTEGER NOT NULL,
  two_star INTEGER NOT NULL,
  three_star INTEGER NOT NULL,
  four_star INTEGER NOT NULL,
  five_star INTEGER NOT NULL
);

CREATE TABLE about_product (
  id SERIAL,
  product_id INTEGER NOT NULL,
  info VARCHAR(150) NOT NULL
);

CREATE TABLE related_products (
  id SERIAL PRIMARY KEY,
  product_id INTEGER NOT NULL,
  related_id INTEGER NOT NULL
);

    COPY about_product FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/about_0.tsv' DELIMITER E'\t';
    COPY products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/products_0.tsv' DELIMITER E'\t';
    COPY related_products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/related_0.tsv' DELIMITER E'\t';
    COPY product_reviews FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/reviews_0.tsv' DELIMITER E'\t';
    
    COPY about_product FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/about_1.tsv' DELIMITER E'\t';
    COPY products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/products_1.tsv' DELIMITER E'\t';
    COPY related_products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/related_1.tsv' DELIMITER E'\t';
    COPY product_reviews FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/reviews_1.tsv' DELIMITER E'\t';
    
    COPY about_product FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/about_2.tsv' DELIMITER E'\t';
    COPY products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/products_2.tsv' DELIMITER E'\t';
    COPY related_products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/related_2.tsv' DELIMITER E'\t';
    COPY product_reviews FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/reviews_2.tsv' DELIMITER E'\t';
    
    COPY about_product FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/about_3.tsv' DELIMITER E'\t';
    COPY products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/products_3.tsv' DELIMITER E'\t';
    COPY related_products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/related_3.tsv' DELIMITER E'\t';
    COPY product_reviews FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/reviews_3.tsv' DELIMITER E'\t';
    
    COPY about_product FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/about_4.tsv' DELIMITER E'\t';
    COPY products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/products_4.tsv' DELIMITER E'\t';
    COPY related_products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/related_4.tsv' DELIMITER E'\t';
    COPY product_reviews FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/reviews_4.tsv' DELIMITER E'\t';
    
    COPY about_product FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/about_5.tsv' DELIMITER E'\t';
    COPY products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/products_5.tsv' DELIMITER E'\t';
    COPY related_products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/related_5.tsv' DELIMITER E'\t';
    COPY product_reviews FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/reviews_5.tsv' DELIMITER E'\t';
    
    COPY about_product FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/about_6.tsv' DELIMITER E'\t';
    COPY products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/products_6.tsv' DELIMITER E'\t';
    COPY related_products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/related_6.tsv' DELIMITER E'\t';
    COPY product_reviews FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/reviews_6.tsv' DELIMITER E'\t';
    
    COPY about_product FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/about_7.tsv' DELIMITER E'\t';
    COPY products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/products_7.tsv' DELIMITER E'\t';
    COPY related_products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/related_7.tsv' DELIMITER E'\t';
    COPY product_reviews FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/reviews_7.tsv' DELIMITER E'\t';
    
    COPY about_product FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/about_8.tsv' DELIMITER E'\t';
    COPY products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/products_8.tsv' DELIMITER E'\t';
    COPY related_products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/related_8.tsv' DELIMITER E'\t';
    COPY product_reviews FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/reviews_8.tsv' DELIMITER E'\t';
    
    COPY about_product FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/about_9.tsv' DELIMITER E'\t';
    COPY products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/products_9.tsv' DELIMITER E'\t';
    COPY related_products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/related_9.tsv' DELIMITER E'\t';
    COPY product_reviews FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/reviews_9.tsv' DELIMITER E'\t';
    