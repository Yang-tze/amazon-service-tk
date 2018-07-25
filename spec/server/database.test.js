const mysql = require('mysql');
const { getProduct } = require('../../server/database.js');
const { getRelated } = require('../../server/database.js');
const { getAll } = require('../../server/database.js');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'product_db',
});

beforeAll(() => {
  return new Promise((resolve, reject) => {
    connection.query(`insert into products (id, brand, name, product_tier, product_options, price, about_product, is_prime, stock_count, reviews, stars, questions, seller, thumbnail) values(3224, "nike", "valkerie", "gluten-free", '{"colors": ["black", "white"], "sizes": ["small", "large"]}', '{"sale": 39.98}', '["turbo charged marshmallows", "120 miles per gallon of orange juice", "40% more energy use"]', 1, 2, 30, 5, 45, "Amazon", "gluten-free.jpg")`, (err) => {
      if (err) {
        reject();
      } else {
        connection.query(`insert into products (id, brand, name, product_tier, product_options, price, about_product, is_prime, stock_count, reviews, stars, questions, seller, thumbnail) values(3225, "nike", "valkerie", "dairy-free", '{"colors": ["black", "white"], "sizes": ["small", "large"]}', '{"sale": 37.98}', '["turbo charged marshmallows", "120 miles per gallon of orange juice", "40% more energy use"]', 1, 2, 30, 5, 45, "Amazon", "dairy-free.jpg")`, (error) => {
          if (error) {
            reject();
          } else {
            resolve();
          }
        });
      }
    });
  });
});

afterAll(() => {
  return new Promise((resolve, reject) => {
    connection.query('delete from products where id = 3224 or id = 3225', (err) => {
      if (err) {
        reject();
      } else {
        resolve();
      }
    });
  });
});
