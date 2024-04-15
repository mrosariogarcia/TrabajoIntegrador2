/* Normalmente, acá "importaríamos la base de datos" */

let db = require("../db/db"); //importando la lista, para mandarla a renderizar en mi objeto literal, para mostrar productos 

let mainController = {
    home: function(req, res) {
        return res.render('index', {info:db})
    },

    register: function(req,res){
        return res.render('register')
    },

    login: function(req,res){
        return res.render('login')
    },
    
    searchResults:function(req,res){
        return res.render('searchResults', {respuesta:db.productos})
    }
}

module.exports = mainController