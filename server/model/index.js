const cassandra = require('../../data/cassandraConnection.js');
const redis = require('../../data/redisConnection.js');
const {
  handleResults,
  generateAddProductString,
  generateUpdateProductString,
} = require('./utils.js');

const cacheExpiration = 3600;

const getProductById = (productId, callback) => {
  redis.get(productId, (err, reply) => {
    if (reply) {
      handleResults(null, reply, callback);
    } else {
      queryDbById(productId, callback);
    }
  });
};

const queryDbById = (productId, callback) => {
  const queryString = 'SELECT * FROM products WHERE id = ?';
  cassandra.stream(queryString, [productId], { prepare: true }).on('readable', function () {
    const row = this.read();
    if (row) {
      handleResults(null, row, callback);
      redis.setex(productId, cacheExpiration, JSON.stringify(row), redis.print);
    } else {
      handleResults(new Error(`No record found with id ${productId}`), null, callback);
    }
  });
};

const getProductByName = (productName, callback) => {
  redis.get(productName, (err, reply) => {
    if (reply) {
      handleResults(null, reply, callback);
    } else {
      queryDbByName(productName, callback);
    }
  });
};

const queryDbByName = (productName, callback) => {
  const queryString = 'SELECT * FROM products_by_name WHERE product_name = ?';
  cassandra.stream(queryString, [productName], { prepare: true }).on('readable', function () {
    const row = this.read();
    if (row) {
      handleResults(null, row, callback);
      redis.setex(productName, cacheExpiration, JSON.stringify(row), redis.print);
    } else {
      handleResults(new Error(`No record found with name ${productName}`), null, callback);
    }
  });
};

const updateProductCount = (count) => {
  cassandra.execute(
    'UPDATE product_count SET count = ? WHERE id = ?',
    [count, 1],
    { prepare: true },
    (err) => {
      if (err) console.error(err);
    },
  );
};

const addProduct = (data, callback) => {
  cassandra.execute(
    'SELECT count from product_count WHERE id = ?',
    [1],
    { prepare: true },
    (err, results) => {
      if (err) callback(err);
      else {
        const id = results.rows[0].count + 1;
        const queryString = generateAddProductString(data, id);
        updateProductCount(id, callback);
        cassandra.execute(queryString, Object.values(data), { prepare: true }, (err, results) => {
          handleResults(err, results, callback);
        });
      }
    },
  );
};

const updateProduct = (productId, data, callback) => {
  redis.del('productId');
  const queryString = generateUpdateProductString(productId, data);
  cassandra.execute(queryString, Object.values(data), { prepare: true }, (err, results) => {
    handleResults(err, results, callback);
  });
};

const deleteProduct = (productId, callback) => {
  redis.del(productId);
  const queryString = 'DELETE FROM products WHERE id = ?';
  cassandra.execute(queryString, [productId], { prepare: true }, (err, results) => {
    handleResults(err, results, callback);
  });
};

module.exports = {
  getProductById,
  getProductByName,
  addProduct,
  updateProduct,
  deleteProduct,
};
