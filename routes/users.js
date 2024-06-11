const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.get("/register",usersController.register);
router.get("/login",usersController.logindex);
router.get("/", usersController.detail);
router.get("/edit", usersController.edit);

router.get("/product-add", usersController.productAdd)

module.exports = router;