const router = require('express').Router();
const metadataController = require('./controllers/metadataController.js');
const descriptionController = require('./controllers/descriptionController.js');
const relatedController = require('./controllers/relatedController.js');

router.post('/products', metadataController.postProduct);
router.get('/products/:id', metadataController.getProductById);
router.get('/products/name/:name', metadataController.getProductByName);
router.patch('/products/:id', metadataController.patchProduct);
router.delete('/products/:id', metadataController.deleteProduct);

router.post('products/:id/about', descriptionController.postAbout);
router.put('products/:id/about', descriptionController.putAbout);

router.post('products/:id/related/:id', relatedController.postRelated);
router.delete('products/:id/related/:id', relatedController.deleteRelated);

module.exports = router;
