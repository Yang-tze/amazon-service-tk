import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'product-db',
});

const getProduct = function getProductInformation(productId, callback) {
  connection.query('select * from products', (err, results) => {
    if (err) console.error(err);
    callback(results);
  });
};

const getRelated = function getRelatedProducts(productName, callback) {
  connection.query(`select id, product_tier, price, stock_count, thumbnail from products where name=${productName}`, (err, results) => {
    if (err) console.error(err);
    callback(results);
  });
};
