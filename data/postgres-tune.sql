ALTER TABLE product_reviews ADD CONSTRAINT distfk (product_id) REFERENCES products (id) MATCH SIMPLE;

ALTER TABLE about_product ADD CONSTRAINT distfk (product_id) REFERENCES products (id) MATCH SIMPLE;

ALTER TABLE related_products ADD CONSTRAINT distfk (product_id) REFERENCES products (id) MATCH SIMPLE;
