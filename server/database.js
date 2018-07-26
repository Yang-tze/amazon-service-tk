const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'product_db',
});

const getProduct = function getProductInformation(productId, callback) {
  connection.query(`select * from products where id=${productId}`, (err, results) => {
    if (err) console.error(err);
    callback(results);
  });
};

const getRelated = function getRelatedProducts(productName, productId, callback) {
  connection.query(`select id, product_tier, price, stock_count, thumbnail from products where name='${productName}' and id <> ${productId}`, (err, results) => {
    if (err) console.error(err);
    callback(results);
  });
};

const getAll = function getProductAndRelatedProducts(productId, callback) {
  let storage;
  getProduct(productId, (results) => {
    storage = results;
    const productName = storage[0].name;
    getRelated(productName, productId, (relatedResults) => {
      storage = storage.concat(relatedResults);
      callback(storage);
    });
  });
};

module.exports = { getProduct, getRelated, getAll };
