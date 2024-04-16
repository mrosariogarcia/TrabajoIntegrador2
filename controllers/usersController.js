/* Normalmente, acá "importaríamos la base de datos" */

let db = require("../db/db"); //importando la lista, para mandarla a renderizar en mi objeto literal, para mostrar productos 

let usersController = {

    register: function(req,res){
        return res.render('register')
    },

    login: function(req,res){
        return res.render('login')
    },
    
    detail: function(req,res){
        return res.render('profile', {
            datosUsuario: db.usuario, 
            lista: db.productos, 
            comentarios: db.comentarios
        }
        )},

    edit: function(req,res){
        return res.render('profile-edit', {
            datosUsuario: db.usuario
        })
    }
}

module.exports = usersController