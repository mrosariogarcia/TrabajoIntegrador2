var express = require('express');
var router = express.Router();

let homeController= require('../controllers/homeController')

/* GET home page. */

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
