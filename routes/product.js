const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.get('/', productController.home);
router.get('/searchResults', productController.searchResults);

module.exports = router;