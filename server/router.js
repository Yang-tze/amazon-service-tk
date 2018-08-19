const router = require('express').Router();
const path = require('path');
const controller = require('./controller');

router.get('/loaderio-5281ea463c61db90880da22f631e2f0e', (req, res) => {
  res.sendFile(path.join(__dirname, '../loaderio-5281ea463c61db90880da22f631e2f0e.txt'));
});

router.get('/products/:id', controller.getProductById);
router.get('/products/name/:name', controller.getProductByName);
router.post('/products', controller.postProduct);
router.patch('/products/:id', controller.patchProduct);
router.delete('/products/:id', controller.deleteProduct);

module.exports = router;
