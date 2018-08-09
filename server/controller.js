const model = require('./model.js');

module.exports = {
  postProduct(req, res) {
    if (req.body) {
      model.addProduct(req.body, results => res.send(results));
    } else {
      res.end();
    }
  },
  getById(req, res) {
    if (parseInt(req.params.id, 10)) {
      model.getAll(req.params.id, results => res.send(results));
    } else {
      res.end();
    }
  },
  getByName(req, res) {
    // if (parseInt(req.params.id, 10)) {
    //   model.getAll(req.params.id, results => res.send(results));
    // } else {
    //   res.end();
    // }
  },
  putPrice(req, res) {
    // if (parseInt(req.params.id, 10)) {
    //   model.updateProduct(req.params.id, req.body.name, results => res.send(results));
    // } else {
    //   res.end();
    // }
  },
  putQuestions(req, res) {
    // if (parseInt(req.params.id, 10)) {
    //   model.updateProduct(req.params.id, req.body.name, results => res.send(results));
    // } else {
    //   res.end();
    // }
  },
  putThumbnail(req, res) {
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
