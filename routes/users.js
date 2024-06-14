const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const registerValidation = require('../middlewares/register-validator')
const loginValidation = require("../middlewares/login-validator");

router.get("/register",usersController.register);
router.post("/register",registerValidation,usersController.store)

router.get("/login",usersController.index);
router.post("/login", loginValidation,usersController.login)

router.get("/", usersController.detail);
router.get("/edit", usersController.edit);

router.get("/product-add", usersController.productAdd)


module.exports = router;