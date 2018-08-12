const router = require('express').Router();
const controller = require('./controller');

router.get('/products/:id', controller.getProductById);
router.get('/products/name/:name', controller.getProductByName);
router.post('/products', controller.postProductMetadata);
router.patch('/products/:id', controller.patchProductMetadata);
router.delete('/products/:id', controller.deleteProduct);

module.exports = router;
