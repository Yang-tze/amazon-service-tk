const handleResults = (err, results, callback, startTime) => {
  // console.log('Query time:', new Date() - startTime);
  if (err) {
    console.error(err);
    callback(err);
  } else {
    callback(null, results);
  }
};

const generateAddProductString = (data, id) => {
  const placeholders = [];
  for (key in data) {
    placeholders.push('?');
  }
  let queryString = 'INSERT INTO products ';
  queryString += `(id,${Object.keys(data).join(',')}) `;
  queryString += `VALUES (${id},${placeholders.join(',')})`;
  return queryString;
};

const generateUpdateProductString = (productId, data) => {
  const assignments = [];
  for (key in data) {
    assignments.push(`${key}=?`);
  }
  let queryString = 'UPDATE products SET ';
  queryString += assignments.join(',');
  queryString += ` WHERE id=${productId}`;
  return queryString;
};

module.exports = {
  handleResults,
  generateAddProductString,
  generateUpdateProductString,
};
