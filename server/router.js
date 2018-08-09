const router = require('express').Router();
const controller = require('./controller.js');

router.post('/products', controller.postProduct);
router.get('/products/:id', controller.getById);
router.get('/products/name/:name', controller.getByName);
router.put('/products/:id/price/:price', controller.putPrice);
router.put('/products/:id/questions/:count', controller.putQuestions);
router.put('/products/:id/thumbnail/:thumbnail', controller.putThumbnail);
router.delete('/products/:id', controller.deleteProduct);

// router.get('/about/:id/:index', controller.getAbout);
// router.post('/about/');

// router.post('/related/:id/:idRelated', controller.postRelated);
// router.get('/related/:id', controller.getRelated);
router.module.exports = router;
