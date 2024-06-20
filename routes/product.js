const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.producto);
router.get('/searchResults', productController.search);
router.get('/detalle/:id', productController.detalle);
router.get('/product-add', productController.agregar);

module.exports = router;
