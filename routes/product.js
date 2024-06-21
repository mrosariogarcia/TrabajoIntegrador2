const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.producto);
router.get('/searchResults', productController.search);
router.get('/detalle/:id', productController.detalle);

router.get('/add', productController.add);
router.post('/add', productController.store);

module.exports = router;
