/* Normalmente, acá "importaríamos la base de datos" */

let db = require("../db/db"); //importando la lista, para mandarla a renderizar en mi objeto literal, para mostrar productos 

let homeController = {
    index: function(req, res) {
        res.render('home')
    }
}

module.exports = homeController