var express = require('express');
var router = express.Router();


let loginController= require('../controllers/loginController')


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


module.exports = router;
