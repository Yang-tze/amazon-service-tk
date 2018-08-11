const model = require('../model');

const postRelated = (req, res) => {
  const {
    params: { id },
    body: { relatedId },
  } = req;
  if (relatedId) {
    model.addRelatedProduct(id, relatedId, results => res.send(results));
  } else {
    res.end();
  }
};

const deleteRelated = (req, res) => {
  const {
    params: { id },
  } = req;
  if (parseInt(id, 10)) {
    model.deleteRelatedProducts(id, results => res.send(results));
  } else {
    res.end();
  }
};

module.exports = {
  postRelated,
  deleteRelated,
};
