const router = require('express').Router();
const path = require('path');
const controller = require('./controller');

router.get('/loaderio-5281ea463c61db90880da22f631e2f0e', (req, res) => {
  res.sendFile(
    path.resolve(__dirname, '../loadTests/loaderio-5281ea463c61db90880da22f631e2f0e.txt'),
  );
});
router.get('/loaderio-6b0f90b6fe2e84bec57e9541df63e578', (req, res) => {
  res.sendFile(
    path.resolve(__dirname, '../loadTests/loaderio-6b0f90b6fe2e84bec57e9541df63e578.txt'),
  );
});

router.get('/products/:id', controller.getProductById);
router.get('/products/name/:name', controller.getProductByName);
router.post('/products', controller.postProduct);
router.patch('/products/:id', controller.patchProduct);
router.delete('/products/:id', controller.deleteProduct);

module.exports = router;
