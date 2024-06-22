let db = require("../database/models")

let indexController= {
    home: function(req, res, next){
        let filtro = {
            order: [['createdAt', 'DESC']],
            include: [
                { association: "comentarios" },
                { association: "usuario" }
            ]
        }
        db.Product.findAll(filtro)
            .then(function(data){
                return res.render('index',{productos:data})
            })    
            .catch(function (error) {
                console.log(error);
              }); 

    }

    // home: function(req, res) {
    //     db.Product.findAll()
    //         .then(function(data){
    //             res.render('index',{productos:data})
    //         })    
    //         .catch(function (error) {
    //             console.log(error);
    //           }); 
    // },
}

module.exports = indexController
