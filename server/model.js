const connection = require('../data/postgres.js');

const handleResults = (err, results, callback, startTime) => {
  console.log('Query time:', new Date() - startTime);
  if (err) {
    console.error(err);
    return;
  }
  callback(results);
};

const execMultiple = (queryStrings, callback) => {
  const next = () => {
    const queryString = queryStrings.pop();
    if (queryString) {
      connection.query(queryString, (err, results) => {
        handleResults(err, results, next);
      });
    } else {
      callback();
    }
  };
  next();
};

const getProductById = (productId, callback) => {
  const startTime = new Date();
  const queryString = `SELECT * FROM products WHERE id=${productId}`;
  connection.query(queryString, (err, results) => {
    handleResults(err, results, callback, startTime);
  });
};

const getProductByName = (productName, callback) => {
  const startTime = new Date();
  const queryString = `SELECT * FROM products WHERE product_name='${productName}'`;
  connection.query(queryString, (err, results) => {
    handleResults(err, results, callback, startTime);
  });
};

const deleteProduct = (productId, callback) => {
  const queryStrings = [
    `DELETE FROM products WHERE id='${productId}'`,
    `DELETE FROM about_product WHERE product_id='${productId}'`,
    `DELETE FROM related_products WHERE product_id='${productId}'`,
  ];
  execMultiple(queryStrings, callback);
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

// NEW crud functions

const addProduct = (
  {
    brand,
    name,
    product_tier,
    product_options,
    price,
    about_product,
    is_prime,
    stock_count,
    reviews,
    questions,
    seller,
    thumbnail,
  },
  callback,
) => {
  connection.query(
    `insert into products
    (brand, name, product_tier, product_options, price, about_product,
      is_prime, stock_count, reviews, questions, seller, thumbnail)
      values ("${brand}", "${name}", "${product_tier}", "${product_options}", "${price}",
      "${about_product}", ${is_prime}, ${stock_count}, "${reviews}", ${questions}, "${seller}", "${thumbnail}")`,
    (err, results) => {
      if (err) console.error(err);
      callback(results);
    },
  );
};

const updateProduct = (productId, name, callback) => {
  connection.query(`update products set name="${name}" where id=${productId}`, (err, results) => {
    if (err) console.error(err);
    callback(results);
  });
};

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
