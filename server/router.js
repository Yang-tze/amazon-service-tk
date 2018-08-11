const router = require('express').Router();
const metadataController = require('./controllers/metadataController.js');
const descriptionController = require('./controllers/descriptionController.js');
const relatedController = require('./controllers/relatedController.js');

router.get('/products/:id', metadataController.getProductById);
router.get('/products/name/:name', metadataController.getProductByName);
router.delete('/products/:id', metadataController.deleteProduct);

router.post('/products/metadata', metadataController.postProductMetadata);
router.patch('/products/:id/metadata', metadataController.patchProductMetadata);

router.post('/products/:id/descriptions', descriptionController.postDescriptions);
router.put('/products/:id/descriptions', descriptionController.putDescriptions);

router.post('/products/:id/related', relatedController.postRelated);
router.delete('/products/:id/related', relatedController.deleteRelated);

module.exports = router;
