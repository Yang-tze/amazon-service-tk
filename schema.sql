CREATE DATABASE product_db;

USE product_db;

CREATE TABLE products (
id INTEGER PRIMARY KEY,
brand VARCHAR(100) NOT NULL,
name VARCHAR(200) NOT NULL,
product_options JSON NOT NULL,
price JSON NOT NULL,
about_product JSON NOT NULL,
is_prime BOOLEAN NOT NULL,
stock_count INTEGER NOT NULL,
reviews INTEGER NOT NULL,
stars INTEGER NOT NULL,
questions INTEGER NOT NULL,
seller VARCHAR(150) NOT NULL,
thumbnail TEXT NOT NULL
);

-- product_options {"color", "size"}
-- price {"msrp", "list", "sale"}
-- about_product ["bullet point 1", "bullet point 2", "...", "bullet point n"]

CREATE TABLE related_products (
id INTEGER auto_increment,
product_id INTEGER NOT NULL,
related_product_id INTEGER NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (product_id) REFERENCES products(id),
FOREIGN KEY (related_product_id) REFERENCES products(id)
);

INSERT INTO products (id, brand, name, product_options, price, about_product, 
  is_prime, stock_count, reviews, stars, questions, seller, thumbnail) VALUES();

