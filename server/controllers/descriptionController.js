const model = require('../model');

const postDescriptions = (req, res) => {
  const { body } = req;
  if (Object.keys(body).length) {
    model.addProductDescriptions(body, results => res.send(results));
  } else {
    res.end();
  }
};

const putDescriptions = (req, res) => {
  const {
    params: { id },
  } = req;
  const { body } = req;
  if (Object.keys(body).length) {
    model.updateProductDescriptions(id, body, results => res.send(results));
  } else {
    res.end();
  }
};

module.exports = {
  postDescriptions,
  putDescriptions,
};
