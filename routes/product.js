const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.producto);
//router.get('/:id', productController.detalle);
router.get('/searchResults', productController.searchResults);

module.exports = router;