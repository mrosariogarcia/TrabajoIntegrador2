/* importaríamos la base de datos */

let db = require("../database/models"); //importando la lista, para mandarla a renderizar en mi objeto literal, para mostrar productos 
const {body} = require('express-validator');

let usersController = {

    register: function(req,res){
        //Mostrar el formulario de registro
        return res.render('register')
    },
    store: function(req,res){
        //guardar el usuario en la db
        let user = {
            email: req.body.email,
            usuario: req.body.usuario,
            contrasena:req.body.contrasena,
            fechaDeNacimiento:req.body.fechaDeNacimiento,
            dni:req.body.dni,
            fotoDePerfil:req.body.fotoDePerfil
        }
        db.User.create(user)
        .then(function(user){
            return res.redirect('/login') // le tenes que pasar la ruta

        })
        .catch(function(err){
             console.log(err)
        })

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
    },

    productAdd:function(req,res){
        return res.render('product-add', {
            datosUsuario: db.usuario
        })
    }
}

module.exports = usersController