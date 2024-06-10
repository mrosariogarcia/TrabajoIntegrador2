/* importaríamos la base de datos */

let db = require("../db/db"); //importando la lista, para mandarla a renderizar en mi objeto literal, para mostrar productos 

// requerimos express validator y validationResults
const {validationResults} = require('express-validator');


let usersController = {

    register: function(req,res){
        // obtenemos los resultados de las validaciones
        const resultValidation = validationResults(req);

        // preguntamos si hay errores
        if (!resultValidation.isEmpty()) {
            console.log("resultValidation: ", JSON.stringify(resultValidation))
            return res.render('register', {
                errors: resultValidation.mapped(),
                oldData: req.body 
            })
        } 
        else {

        }
        
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
    },

    productAdd:function(req,res){
        return res.render('product-add', {
            datosUsuario: db.usuario
        })
    }
}

module.exports = usersController