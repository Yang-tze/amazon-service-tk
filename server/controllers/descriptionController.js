const model = require('../model');

const postDescriptions = (req, res) => {
  const {
    params: { id },
    body: { descriptions },
  } = req;
  if (descriptions) {
    model.addProductDescriptions(id, descriptions, results => res.send(results));
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
    model.updateProductDescriptions(id, descriptions, results => res.send(results));
  } else {
    res.end();
  }
};

module.exports = {
  postDescriptions,
  putDescriptions,
};
