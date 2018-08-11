const model = require('../model');

const postDescriptions = (req, res) => {
  const {
    params: { id },
    body: { descriptions },
  } = req;
  if (descriptions) {
    model.addProductDescriptions(id, descriptions, (err, results) => handleResponse(err, results, res));
  } else {
    res.end();
  }
};

const putDescriptions = (req, res) => {
  const {
    params: { id },
    body: { descriptions },
  } = req;
  if (descriptions) {
    model.updateProductDescriptions(id, descriptions, (err, results) => handleResponse(err, results, res));
  } else {
    res.end();
  }
};

module.exports = {
  postDescriptions,
  putDescriptions,
};
