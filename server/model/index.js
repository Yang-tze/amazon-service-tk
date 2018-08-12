// const connection = require('../../data/postgresConnection.js');
const client = require('../../data/cassandraConnection.js');
const {
  handleResults,
  generateAddProductString,
  generateUpdateProductString,
  translateDataForClient,
} = require('./utils.js');

const updateDatabase = (queryString, callback) => {
  const startTime = new Date();
  client.execute(queryString, (err, results) => {
    handleResults(err, results, callback, startTime);
  });
};

// const query = 'SELECT id, name FROM users WHERE id = ?';
// client.execute(query, [ id ], { prepare: true }, callback);

const getProductById = (productId, callback) => {
  const queryString = 'SELECT * FROM products WHERE id = ?';
  const startTime = new Date();
  client.execute(queryString, [productId], { prepare: true }, (err, data) => {
    const results = err || translateDataForClient(data.rows[0]);
    handleResults(err, results, callback, startTime);
  });
};

const getProductByName = (productName, callback) => {
  const queryString = 'SELECT * FROM products WHERE product_name = ?';
  const startTime = new Date();
  client.execute(queryString, [productId], { prepare: true }, (err, data) => {
    const results = err || translateDataForClient(data.rows[0]);
    handleResults(err, results, callback, startTime);
  });
};

const addProduct = (data, callback) => {
  const queryString = generateAddProductString(data);
  updateDatabase(queryString, callback);
};

const updateProduct = (productId, data, callback) => {
  const queryString = generateUpdateProductString(productId, data);
  updateDatabase(queryString, callback);
};

const deleteProduct = (productId, callback) => {
  const queryString = `DELETE FROM products WHERE id = ${productId}`;
  updateDatabase(queryString, callback);
};

module.exports = {
  getProductById,
  getProductByName,
  addProduct,
  updateProduct,
  deleteProduct,
};
