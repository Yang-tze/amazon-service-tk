ALTER TABLE product_reviews ADD CONSTRAINT fk_review FOREIGN KEY (product_id) REFERENCES products(id);

ALTER TABLE about_product ADD CONSTRAINT fk_about FOREIGN KEY (product_id) REFERENCES products(id);

ALTER TABLE related_products ADD CONSTRAINT fk_related FOREIGN KEY (product_id) REFERENCES products(id);
