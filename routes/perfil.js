const express = require('express');
const router = express.Router();
const perfilController= require('../controllers/perfilController')

router.get('/', perfilController);

/* Si es que tenemos mas /algo, los agregamos con el mismo formato */
/* y ponemos despues del controles (ej) ".index" para ver que controlador usar */

module.exports = router;