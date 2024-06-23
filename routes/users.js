const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');
const registerValidation = require('../middlewares/register-validator')
const loginValidation = require("../middlewares/login-validator");
const editValidation = require('../middlewares/edit-validation')

router.get("/register",usersController.register);
router.post("/register",registerValidation,usersController.store)

router.get("/login",usersController.index);
router.post("/login", loginValidation,usersController.login)

router.post("/logout", usersController.logout);

router.get("/profile/:id", usersController.detail);


router.get("/edit/:id", usersController.edit);
router.post("/edit/:id", editValidation ,usersController.update);


module.exports = router;