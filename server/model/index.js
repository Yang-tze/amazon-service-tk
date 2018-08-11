const connection = require('../../data/postgresConnection.js');
const {
  handleResults,
  getProductInfoFromQueries,
  generateAddString,
  generateUpdateString,
} = require('./utils.js');

const addProduct = (data, callback) => {
  const startTime = new Date();
  const queryString = generateAddString('products', data);
  connection.query(queryString, (err, results) => {
    handleResults(err, results, callback, startTime);
  });
};

const getProductById = (productId, callback) => {
  const selectMetadata = `SELECT * FROM product_metadata WHERE id=${productId}`;
  const selectDescriptions = `SELECT descriptions FROM product_descriptions WHERE product_id=${productId}`;
  const selectRelated = `SELECT * FROM product_metadata pm INNER JOIN related_products rp ON pm.id = rp.related_id WHERE rp.product_id=${productId}`;
  getProductInfoFromQueries(
    [selectMetadata, selectDescriptions, selectRelated],
    connection,
    callback,
  );
};

const getProductByName = (productName, callback) => {
  const selectMetadata = `SELECT * FROM product_metadata WHERE product_name='${productName}'`;
  const selectDescriptions = `SELECT descriptions FROM product_descriptions WHERE product_id IN (SELECT id FROM product_metadata WHERE product_name='${productName}')`;
  const selectRelated = `SELECT * FROM product_metadata pm INNER JOIN related_products rp ON pm.id = rp.related_id WHERE rp.product_id  IN (SELECT id FROM product_metadata WHERE product_name='${productName}')`;
  getProductInfoFromQueries(
    [selectMetadata, selectDescriptions, selectRelated],
    connection,
    callback,
  );
};

const deleteProduct = (productId, callback) => {
  const startTime = new Date();
  const deleteRelated = `DELETE FROM related_products WHERE product_id='${productId}'`;
  const deleteDescriptions = `DELETE FROM product_descriptions WHERE product_id='${productId}'`;
  const deleteMetadata = `DELETE FROM product_metadata WHERE id='${productId}'`;
  const relatedQuery = connection.query(deleteRelated);
  const descriptionQuery = connection.query(deleteDescriptions);
  Promise.all([relatedQuery, descriptionQuery]).then(() => {
    connection.query(deleteMetadata, (err, results) => {
      handleResults(err, results, callback, startTime);
    });
  });
};

const updateProduct = (productId, data, callback) => {
  const startTime = new Date();
  const queryString = generateUpdateString('product_metadata', 'id', productId, data);
  connection.query(queryString, (err, results) => {
    handleResults(err, results, callback, startTime);
  });
};

// const getRelated = function getRelatedProducts(productName, productId, callback) {
//   connection.query(
//     `select id, product_tier, price, stock_count, thumbnail from products where name='${productName}' and id <> ${productId}`,
//     (err, results) => {
//       if (err) console.error(err);
//       callback(results);
//     },
//   );
// };

// const getAll = function getProductAndRelatedProducts(productId, callback) {
//   const storage = {};
//   getProduct(productId, (results) => {
//     storage.data = parseData(results[0]);
//     const productName = results[0].name;
//     getRelated(productName, productId, (relatedResults) => {
//       storage.related = relatedResults.map(object => parseData(object));
//       callback(storage);
//     });
//   });
// };

module.exports = {
  getProductById,
  getProductByName,
  // getAll,
  addProduct,
  updateProduct,
  deleteProduct,
};

// const color = ['green', 'white', 'blue', 'black', 'silver', 'purple'];

// const size = ['S', 'M', 'L', 'XL'];
