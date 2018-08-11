const model = require('../model');

const getProductById = (req, res) => {
  const {
    params: { id },
  } = req;
  if (parseInt(id, 10)) {
    model.getProductById(id, results => res.send(results));
  } else {
    res.end();
  }
};

const getProductByName = (req, res) => {
  const {
    params: { name },
  } = req;
  if (name) {
    model.getProductByName(name, results => res.send(results));
  } else {
    res.end();
  }
};

const postProductMetadata = (req, res) => {
  const { body } = req;
  if (Object.keys(body).length) {
    model.addProduct(body, results => res.send(results));
  } else {
    res.end();
  }
};

const patchProductMetadata = (req, res) => {
  const {
    params: { id },
  } = req;
  const { body } = req;
  if (Object.keys(body).length) {
    model.updateProduct(id, body, results => res.send(results));
  } else {
    res.end();
  }
};

const deleteProduct = (req, res) => {
  const {
    params: { id },
  } = req;
  if (parseInt(id, 10)) {
    model.deleteProduct(id, results => res.send(results));
  } else {
    res.end();
  }
};

module.exports = {
  getProductById,
  getProductByName,
  deleteProduct,
  postProductMetadata,
  patchProductMetadata,
};
