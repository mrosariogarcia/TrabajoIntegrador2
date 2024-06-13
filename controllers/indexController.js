let db = require("../database/models")

let indexController= {

    home: function(req, res) {
        db.Product.findAll()
            .then(function(data){
                res.render('index',{productos:data})
            })    
            .catch(function (error) {
                console.log(error);
              }); 
    },
}

module.exports = indexController
