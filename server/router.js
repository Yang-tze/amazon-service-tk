const router = require('express').Router();
const path = require('path');
const controller = require('./controller');

router.get('/loaderio-ccad00e780ad3f7028e6b63c5f8261b5', (req, res) => {
  res.sendFile(path.join(__dirname, '../loaderio-ccad00e780ad3f7028e6b63c5f8261b5.txt'));
});

router.get('/products/:id', controller.getProductById);
router.get('/products/name/:name', controller.getProductByName);
router.post('/products', controller.postProduct);
router.patch('/products/:id', controller.patchProduct);
router.delete('/products/:id', controller.deleteProduct);

module.exports = router;
