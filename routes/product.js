const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.producto);
router.get('/searchResults', productController.searchResults);
router.get('/detalle', productController.detalle);

module.exports = router;