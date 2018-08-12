// const client = require('../../data/postgresConnection.js');
const client = require('../../data/cassandraConnection.js');
const {
  handleResults,
  generateAddProductString,
  generateUpdateProductString,
  translateDataForClient,
} = require('./utils.js');

const getProductById = (productId, callback) => {
  const queryString = 'SELECT * FROM products WHERE id = ?';
  const startTime = new Date();
  client.execute(queryString, [productId], { prepare: true }, (err, results) => {
    const data = results && translateDataForClient(results.rows[0]);
    handleResults(err, data, callback, startTime);
  });
};

const getProductByName = (productName, callback) => {
  const queryString = 'SELECT * FROM products_by_name WHERE product_name = ?';
  const startTime = new Date();
  client.execute(queryString, [productName], { prepare: true }, (err, results) => {
    const data = results && translateDataForClient(results.rows[0]);
    handleResults(err, data, callback, startTime);
  });
};

const addProduct = (data, callback) => {
  const queryString = generateAddProductString(data);
  const startTime = new Date();
  client.execute(queryString, Object.values(data), { prepare: true }, (err, results) => {
    handleResults(err, data, callback, startTime);
  });
};

const updateProduct = (productId, data, callback) => {
  const queryString = generateUpdateProductString(productId, data);
  console.log(queryString);
  const startTime = new Date();
  client.execute(queryString, Object.values(data), { prepare: true }, (err, results) => {
    handleResults(err, data, callback, startTime);
  });
};

const deleteProduct = (productId, callback) => {
  const queryString = 'DELETE FROM products WHERE id = ?';
  const startTime = new Date();
  client.execute(queryString, [productId], { prepare: true }, (err, results) => {
    handleResults(err, data, callback, startTime);
  });
};

module.exports = {
  getProductById,
  getProductByName,
  addProduct,
  updateProduct,
  deleteProduct,
};
