const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const comentarioValidations= require('../middlewares/comentario-validaition');
const editValidations = require('../middlewares/edit-validation');

router.get('/', productController.producto);
router.get('/searchResults', productController.search);
router.get('/detalle/:id', productController.detalle);

router.get('/add', productController.add);
router.post('/add', productController.store);

router.post('/comentario/:id',comentarioValidations,productController.comentario);
router.post('/borrar/:id',productController.borrar);

router.get('/product-edit/:id', productController.showEdit);
router.post('/product-edit/:id', editValidations, productController.edit);

module.exports = router;
