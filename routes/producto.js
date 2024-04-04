var express = require('express');
var router = express.Router();


let productoController= require('../controllers/productoController')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
