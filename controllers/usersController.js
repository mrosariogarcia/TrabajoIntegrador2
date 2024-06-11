/* importaríamos la base de datos */
const { where } = require('sequelize');
const db = require('../database/models');
const users = db.User;
const op = db.Sequelize.Op;
// requerimos express validator y validationResults
const {validationResult} = require('express-validator');


let usersController = {

    register: function(req,res){
        // obtenemos los resultados de las validaciones
        const resultValidation = validationResult(req);

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
    logindex: function (req, res) {
        //Mostramos el form de login
        return res.render('login')
    },
    login: function (req, res) {
        // buscar el usuario que se quiere loguear 
        users.findOne({
            where: [{
                email: req.body.email
            }]

        })
            .then(function (user) {
                res.session.user = user
                if (req.body.rememberme != undefined) {
                    res.cookie('userId', user.id, { maxAge: 1000 * 60 * 5 })
                }

                return res.redirect('/');

            })
            .catch(function(error){ console.log(error) })

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