const model = require('../model');
const { handleResponse } = require('./utils.js');

const postRelated = (req, res) => {
  const {
    params: { id },
    body: { relatedId },
  } = req;
  if (relatedId) {
    model.addRelatedProduct(id, relatedId, (err, results) => handleResponse(err, results, res));
  } else {
    res.end();
  }
};

const deleteRelated = (req, res) => {
  const {
    params: { id },
  } = req;
  if (parseInt(id, 10)) {
    model.deleteRelatedProducts(id, (err, results) => handleResponse(err, results, res));
  } else {
    res.end();
  }
};

module.exports = {
  postRelated,
  deleteRelated,
};
