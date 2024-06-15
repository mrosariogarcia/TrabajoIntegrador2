/* importaríamos la base de datos */
const { where } = require('sequelize');
let db = require("../database/models");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const op = db.Sequelize.Op;

let usersController = {
    register: function (req, res) {
        //Mostrar el formulario de registro
        return res.render('register');
    },

    store: function (req, res) {
        //obtenemos los resultados de las validaciones
        const errors = validationResult(req);
        // preguntamos si hay errores y si los hay los enviamos a la vista, junto con lo que venía en el body         
        if (errors.isEmpty()){
             //guardar el usuario en la db
             let user = {
                email: req.body.email,
                usuario: req.body.usuario,
                contrasena: bcrypt.hashSync(req.body.contrasena, 10),
                fechaDeNacimiento: req.body.fechaDeNacimiento,
                dni: req.body.dni,
                fotoDePerfil: req.body.fotoDePerfil
            };
            //creamos el usuario
            db.User.create(user)
                .then(function (user) {
                    return res.redirect('/users/login'); // le tenes que pasar la ruta
                })
                .catch(function (err) {
                    console.log("Error al guardar el usuario", err);
                });

        }
        else{
            return res.render('register',{
                errors:errors.array(),
                old:req.body

            })
        }
        
        
    },
            
    index: function (req, res) {
        //Mostramos el form de login
        return res.render('login');
    },

    login: function (req, res) {
        //Resultados de las validaciones de login
        const resultValidation = validationResult(req);

        //revisar que no haya errores en validations
        if (!resultValidation.isEmpty()) {
            console.log("resultValidation:", JSON.stringify(resultValidation, null, 4));
            return res.render('login', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        } else {
            let user = {
                email: req.body.email,
                contrasena: bcrypt.hashSync(req.body.contrasena, 10),
            };

            db.User.findOne({ where: { email: user.email } })
                .then(function (user) {
                    return res.redirect('/index');
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },

    detail: function (req, res) {
        return res.render('profile', {
            datosUsuario: db.usuario,
            lista: db.productos,
            comentarios: db.comentarios
        });
    },

    edit: function (req, res) {
        return res.render('profile-edit', {
            datosUsuario: db.usuario
        });
    },

    productAdd: function (req, res) {
        return res.render('product-add', {
            datosUsuario: db.usuario
        });
    }
};

module.exports = usersController;
