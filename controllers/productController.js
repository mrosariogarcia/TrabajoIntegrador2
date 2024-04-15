let db = require("../db/db"); //importando la lista, para mandarla a renderizar en mi objeto literal, para mostrar productos 

let productController = {
    home: function(req, res) {
        return res.render('index', {info:db})
    },
    
    searchResults:function(req,res){
        return res.render('searchResults', {respuesta:db.productos})
    }
}

module.exports = productController