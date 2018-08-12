const handleResults = (err, results, callback, startTime) => {
  console.log('Query time:', new Date() - startTime);
  if (err) {
    console.error(err);
    callback(err);
  } else {
    callback(null, results);
  }
};

const generateAddProductString = (data) => {
  const placeholders = [];
  for (key in data) {
    placeholders.push('?');
  }
  let queryString = 'INSERT INTO products ';
  queryString += `(${Object.keys(data).join(',')}) `;
  queryString += `VALUES (${placeholders.join(',')})`;
  return queryString;
};

const generateUpdateProductString = (productId, data) => {
  const assignments = [];
  for (key in data) {
    assignments.push(`${key}=?`);
  }
  let queryString = 'UPDATE products SET ';
  queryString += assignments.join(',');
  queryString = ` WHERE id=${productId}`;
  return queryString;
};

const translateDataForClient = (data, callback, startTime) => {
  const related = data.variants.map(variant => ({
    price: { sale: variant.price },
    product_tier: variant.productTier,
    thumbnail: variant.thumbnailUrl,
  }));
  const results = {
    related,
    data: {
      id: data.id,
      about_product: data.descriptions,
      brand: data.brand,
      is_prime: data.is_prime,
      name: data.product_name,
      price: { sale: data.product_price },
      product_options: {
        color: ['green', 'white', 'blue', 'black', 'silver', 'purple'],
        size: ['S', 'M', 'L', 'XL'],
      },
      product_tier: data.product_tier,
      questions: data.num_questions,
      reviews: data.review_totals,
      seller: data.seller_name,
      stockCount: data.stock_count,
      thumbnail: data.thumbnail_url,
    },
  };
  handleResults(null, results, callback, startTime);
};

module.exports = {
  handleResults,
  generateAddProductString,
  generateUpdateProductString,
  translateDataForClient,
};

// const execMultiple = (queryStrings, callback) => {
//   const next = () => {
//     const queryString = queryStrings.pop();
//     if (queryString) {
//       connection.query(queryString, (err, results) => {
//         handleResults(err, results, next);
//       });
//     } else {
//       callback();
//     }
//   };
//   next();
// };
