/* importaríamos la base de datos */
const { where } = require('sequelize');
let db = require("../database/models");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");

const op = db.Sequelize.Op;

let usersController = {

    register: function(req, res, next) {
        
     
        if (req.session.user != undefined) {
            return res.redirect("/users/profile/id/" + req.session.user.id); //no deberia reditigir a la home o al perfil?
        } 
        else {
            return res.render('register')
        };
    },
    
    store: function (req, res) {
        console.log('Solicitud recibida para registrar usuario');
        //guardar el usuario en la db
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            console.log('Datos del usuario:', req.body)
            let user = {
                email: req.body.email,
                usuario: req.body.usuario,
                contrasena: bcrypt.hashSync(req.body.contrasena, 10),
                fechaDeNacimiento: req.body.fechaDeNacimiento,
                dni: req.body.dni,
                fotoDePerfil: req.body.fotoDePerfil
            }
            console.log('Usuario a crear:', user)
            db.User.create(user)
                .then(function (user) {
                    console.log('Nuevo usuario creado:', user)
                    return res.redirect('/users/login') // le tenes que pasar la ruta

                })
                .catch(function (err) {
                    console.log(err)
                });
        } else {
            console.log('Errores de validación:', errors.mapped());
            return res.render('register', { errors: errors.mapped(), old: req.body });
        }
        
    },
            
    index: function (req, res) {

        //Mostramos el form de login
        return res.render('login');
    },

    login: function (req, res, next) {

        //Resultados de las validaciones de login
        const resultValidation = validationResult(req);

        //revisar que no haya errores en validations
        if (resultValidation.isEmpty()){

            //console.log('Usuario a buscar:', user)

            db.User.findOne({ where: { email: req.body.email } }) // FILTRO

                .then(function (user) {
                    // console.log('Usuario logueado:', user)

                    if(user!=undefined){

                        req.session.user = user
                        console.log("Usuario en sesion:", req.session.user)

                        //RECORDAR USUARIO : cookie
                        if(req.body.recordarme){
                            res.cookie("userId", user.id_usuario, { maxAge: 1000 * 60 * 500})
                        }
                        return res.redirect('/')

                    }

                    else{
                        return res.redirect('/'); 
                    }

                })

                .catch(function (error) {
                    console.log(error);
                });
                
        }



        else{
            console.log("resultValidation:", JSON.stringify(resultValidation, null, 4));
            return res.render('login', {
                errors: resultValidation.mapped(),
                oldData: req.body
            });
        }    
    },

    logout: function(req, res, next){
        req.session.destroy();
        res.clearCookie("userId");
        return res.redirect("/");
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
