const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController')

router.get("/index", mainController.home);
router.get("/register",mainController.register);
router.get("/login",mainController.login);




/* Si es que tenemos mas /algo, los agregamos con el mismo formato */
/* y ponemos despues del controles (ej) ".index" para ver que controlador usar */

module.exports = router;