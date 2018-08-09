const router = require('express').Router();
const productController = require('./controller/product.js');
const aboutController = require('./controller/about.js');
const relatedController = require('./controller/related.js');

router.post('/products', productController.postProduct);
router.get('/products/:id', productController.getProductById);
router.get('/products/name/:name', productController.getProductByName);
router.patch('/products/:id', productController.patchProduct);
router.delete('/products/:id', productController.deleteProduct);

router.post('products/:id/about', aboutController.postAbout);
router.put('products/:id/about', aboutController.putAbout);

router.post('products/:id/related/:id', relatedController.postRelated);
router.delete('products/:id/related/:id', relatedController.deleteRelated);

router.module.exports = router;
