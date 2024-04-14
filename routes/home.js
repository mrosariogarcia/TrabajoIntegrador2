const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController')

router.get('/', homeController);

/* Si es que tenemos mas /algo, los agregamos con el mismo formato */
/* y ponemos despues del controles (ej) ".index" para ver que controlador usar */

module.exports = router;