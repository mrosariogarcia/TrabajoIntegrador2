/* Normalmente, acá "importaríamos la base de datos" */

let db = require("../db/db"); //importando la lista, para mandarla a renderizar en mi objeto literal, para mostrar productos 

let homeController = {
    index: function(req, res) {
        return res.render('index', { 
            db:db,              
        
        })
    
    },
    
}

module.exports = homeController