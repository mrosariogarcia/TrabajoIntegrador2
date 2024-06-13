const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');
const loginValidation = require("../middlewares/login-validator");


router.get("/",loginController.index);
router.post("/", loginValidation,loginController.login)

//router.post("/logout",usersController.logout); SERIA LOGOUT?

module.exports = router;