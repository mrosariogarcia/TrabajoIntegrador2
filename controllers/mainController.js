/* Normalmente, acá "importaríamos la base de datos" */

let db = require("../db/db"); //importando la lista, para mandarla a renderizar en mi objeto literal, para mostrar productos 

let mainController = {
    home: function(req, res) {
        return res.render('index', {info:db})
    },

    register: function(req,res){
        return res.render('register',{info:db,})
    },
    
    login: function(req,res){
        return res.render('login', {info:db,})
    }
}

module.exports = mainController