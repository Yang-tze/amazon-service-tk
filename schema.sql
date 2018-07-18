CREATE DATABASE amzn_products;

USE amzn_products;

CREATE TABLE products (
id INTEGER PRIMARY KEY,
brand VARCHAR(50) NOT NULL,
product_name VARCHAR(150) NOT NULL,
product_color VARCHAR(50) NOT NULL,
product_size VARCHAR(50) NOT NULL,
price_msrp INTEGER NOT NULL,
price_list INTEGER NOT NULL,
price_sale INTEGER NOT NULL,
is_prime BOOLEAN NOT NULL,
stock_count INTEGER NOT NULL,
about_product TEXT NOT NULL,
reviews INTEGER NOT NULL,
stars INTEGER NOT NULL,
questions INTEGER NOT NULL
);

CREATE TABLE related_products (
id INTEGER auto_increment,
product_id INTEGER NOT NULL,
related_product_id INTEGER NOT NULL,
PRIMARY KEY (id),
FOREIGN KEY (product_id) REFERENCES products(id),
FOREIGN KEY (related_product_id) REFERENCES products(id)
);
