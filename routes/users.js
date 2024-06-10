const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const registerValidation = require('../middlewares/register-validation')

router.get("/register",usersController.register);
router.get("/login",usersController.login);

router.get("/", usersController.detail);
router.get("/edit", usersController.edit);

router.get("/product-add", usersController.productAdd)

// formulario register
router.post('/register', registerValidations)

module.exports = router;