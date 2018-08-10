DROP TABLE IF EXISTS products;
DROP TABLE IF EXISTS about_product;
DROP TABLE IF EXISTS product_reviews;
DROP TABLE IF EXISTS related_products;

CREATE TABLE products (
  id SERIAL PRIMARY KEY,
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
  id INTEGER NOT NULL,
  info TEXT NOT NULL,
  product_id INTEGER NOT NULL
);

CREATE TABLE related_products (
  id INTEGER NOT NULL,
  product_id INTEGER NOT NULL,
  related_id INTEGER NOT NULL
);

    COPY about_product FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/about_0.tsv' DELIMITER E'\t';
    COPY products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/products_0.tsv' DELIMITER E'\t';
    COPY related_products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/related_0.tsv' DELIMITER E'\t';

    COPY about_product FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/about_1.tsv' DELIMITER E'\t';
    COPY products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/products_1.tsv' DELIMITER E'\t';
    COPY related_products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/related_1.tsv' DELIMITER E'\t';

    COPY about_product FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/about_2.tsv' DELIMITER E'\t';
    COPY products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/products_2.tsv' DELIMITER E'\t';
    COPY related_products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/related_2.tsv' DELIMITER E'\t';

    COPY about_product FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/about_3.tsv' DELIMITER E'\t';
    COPY products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/products_3.tsv' DELIMITER E'\t';
    COPY related_products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/related_3.tsv' DELIMITER E'\t';

    COPY about_product FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/about_4.tsv' DELIMITER E'\t';
    COPY products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/products_4.tsv' DELIMITER E'\t';
    COPY related_products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/related_4.tsv' DELIMITER E'\t';

    COPY about_product FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/about_5.tsv' DELIMITER E'\t';
    COPY products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/products_5.tsv' DELIMITER E'\t';
    COPY related_products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/related_5.tsv' DELIMITER E'\t';

    COPY about_product FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/about_6.tsv' DELIMITER E'\t';
    COPY products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/products_6.tsv' DELIMITER E'\t';
    COPY related_products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/related_6.tsv' DELIMITER E'\t';

    COPY about_product FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/about_7.tsv' DELIMITER E'\t';
    COPY products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/products_7.tsv' DELIMITER E'\t';
    COPY related_products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/related_7.tsv' DELIMITER E'\t';

    COPY about_product FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/about_8.tsv' DELIMITER E'\t';
    COPY products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/products_8.tsv' DELIMITER E'\t';
    COPY related_products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/related_8.tsv' DELIMITER E'\t';

    COPY about_product FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/about_9.tsv' DELIMITER E'\t';
    COPY products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/products_9.tsv' DELIMITER E'\t';
    COPY related_products FROM '/Users/benc/Desktop/ben-details/data/generation/sampleData/related_9.tsv' DELIMITER E'\t';
