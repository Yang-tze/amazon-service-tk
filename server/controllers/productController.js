const model = require('../model.js');

module.exports = {
  postProduct(req, res) {
    if (req.body) {
      model.addProduct(req.body, results => res.send(results));
    } else {
      res.end();
    }
  },
  getProductById(req, res) {
    const {
      params: { id },
    } = req;
    if (parseInt(id, 10)) {
      model.getProductById(id, results => res.send(results));
    } else {
      res.end();
    }
  },
  getProductByName(req, res) {
    const {
      params: { name },
    } = req;
    if (name) {
      model.getProductByName(name, results => res.send(results));
    } else {
      res.end();
    }
  },
  patchProduct(req, res) {
    // if (parseInt(req.params.id, 10)) {
    //   model.updateProduct(req.params.id, req.body.name, results => res.send(results));
    // } else {
    //   res.end();
    // }
  },
  deleteProduct(req, res) {
    if (parseInt(req.params.id, 10)) {
      model.deleteProduct(req.params.id, results => res.send(results));
    } else {
      res.end();
    }
  },
};
