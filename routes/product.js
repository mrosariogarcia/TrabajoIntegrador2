const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const comentarioValidations= require('../middlewares/comentario-validaition')

router.get('/', productController.producto);
router.get('/searchResults', productController.search);
router.get('/detalle/:id', productController.detalle);

router.get('/add', productController.add);
router.post('/add', productController.store);

router.post('/comentario/:id',comentarioValidations,productController.comentario);
router.post('/borrar/:id',productController.borrar);

module.exports = router;
