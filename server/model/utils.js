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
  console.log(queryString);
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
      const results = metadataResults.rows[0];
      results.descriptions = descriptionResults.rows.map(entry => entry.descriptions);
      results.related = relatedResults.rows;
      handleResults(null, results, callback, startTime);
    },
  );
};

module.exports = {
  handleResults,
  // execMultiple,
  generateAddString,
  generateUpdateString,
  getProductInfoFromQueries,
};
