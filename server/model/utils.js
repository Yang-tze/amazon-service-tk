const handleResults = (err, results, callback, startTime) => {
  console.log('Query time:', new Date() - startTime);
  if (err) {
    console.error(err);
    return;
  }
  callback(results);
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

const generateAddString = (tableName, data) => {
  let queryString = `INSERT INTO ${tableName} `;
  queryString += `(${Object.keys(data).join(',')}) `;
  queryString += 'VALUES (';
  for (key in data) {
    const value = parseFloat(data[key]) ? data[key] : `'${data[key]}'`;
    queryString += `${value},`;
  }
  queryString = `${queryString.substring(0, queryString.length - 1)})`;
  return queryString;
};

const generateUpdateString = (tableName, idName, idValue, data) => {
  let queryString = `UPDATE ${tableName} SET`;
  for (key in data) {
    const value = parseFloat(data[key]) ? data[key] : `'${data[key]}'`;
    queryString += ` ${key}=${value},`;
  }
  queryString = `${queryString.substring(0, queryString.length - 1)} WHERE ${idName}=${idValue}`;
  return queryString;
};

const generateAddDescriptionsString = (productId, descriptions) => {
  let queryString = 'INSERT INTO product_descriptions (product_id, description) VALUES ';
  descriptions.forEach((description, index, descriptions) => {
    queryString += `(${productId}, '${description}')`;
    queryString += index < descriptions.length - 1 ? ', ' : ' ';
  });
  return queryString;
};

const getProductInfoFromQueries = (
  [selectMetadata, selectDescriptions, selectRelated],
  connection,
  callback,
) => {
  const startTime = new Date();
  const metadataQuery = connection.query(selectMetadata);
  const descriptionQuery = connection.query(selectDescriptions);
  const relatedQuery = connection.query(selectRelated);
  Promise.all([metadataQuery, descriptionQuery, relatedQuery]).then(
    ([metadataResults, descriptionResults, relatedResults]) => {
      // const results = { data: metadataResults.rows[0] };
      // results.descriptions = descriptionResults.rows.map(entry => entry.descriptions);
      // results.related = relatedResults.rows;
      // handleResults(null, results, callback, startTime);
      translateResponseForClient(
        [metadataResults.rows[0], descriptionResults.rows, relatedResults.rows],
        callback,
        startTime,
      );
    },
  );
};

const translateResponseForClient = (
  [metadataResults, descriptionResults, relatedResults],
  callback,
  startTime,
) => {
  const descriptions = descriptionResults.map(entry => entry.descriptions);
  const related = relatedResults.map(related => ({
    price: { msrp: related.product_price },
    product_tier: related.product_tier,
    thumbnail: related.thumbnail_url,
  }));
  const results = {
    data: {
      id: metadataResults.id,
      about_product: descriptions,
      brand: metadataResults.brand_name,
      is_prime: metadataResults.is_prime,
      name: metadataResults.product_name,
      price: { msrp: metadataResults.product_price },
      product_options: {
        color: ['green', 'white', 'blue', 'black', 'silver', 'purple'],
        size: ['S', 'M', 'L', 'XL'],
      },
      product_tier: metadataResults.product_tier,
      questions: metadataResults.num_questions,
      reviews: [
        metadataResults.reviews_1_star,
        metadataResults.reviews_2_star,
        metadataResults.reviews_3_star,
        metadataResults.reviews_4_star,
        metadataResults.reviews_5_star,
      ],
      seller: metadataResults.seller_name,
      stockCount: metadataResults.stock_count,
      thumbnail: metadataResults.thumbnail_url,
    },
    related,
  };
  handleResults(null, results, callback, startTime);
};

module.exports = {
  handleResults,
  generateAddString,
  generateUpdateString,
  generateAddDescriptionsString,
  getProductInfoFromQueries,
};
