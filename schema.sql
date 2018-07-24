DROP DATABASE product_db IF EXISTS;

CREATE DATABASE product_db;

USE product_db;

CREATE TABLE products (
id INTEGER PRIMARY KEY,
brand VARCHAR(100) NOT NULL,
name VARCHAR(200) NOT NULL,
product_tier VARCHAR(50) NOT NULL,
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

-- product_tier {"capacity"}
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

INSERT INTO products (id, brand, name, product_tier, product_options, price, about_product, is_prime, stock_count, reviews, stars, questions, seller, thumbnail) VALUES(1, 'Jockey', 'Kyra', 'Elite', '{"color":["green","white","blue","black","silver","purple"],"size":["S","M","L","XL"]}', '{"msrp":110.98,"list":99.88,"sale":99.88}', '[" Four dollar toast velit anim, ex cronut quis brooklyn hot chicken"," Umami coloring book enim, post-ironic aliquip taxidermy neutra adipisicing mixtape cupidatat glossier"," Distillery pinterest butcher farm-to-table, iceland synth brunch la croix"]', 0, 72, 359, 1, 48, 'Amazon', 'BioFueled.jpg');
