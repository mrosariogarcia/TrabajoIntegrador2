/* importaríamos la base de datos */
const { where } = require('sequelize');
let db = require("../database/models");
// requerimos express validator y validationResult:
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
        //console.log('Solicitud recibida para registrar usuario');
        //guardar el usuario en la db
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            //console.log('Datos del usuario:', req.body)
            let user = {
                email: req.body.email,
                usuario: req.body.usuario,
                contrasena: bcrypt.hashSync(req.body.contrasena, 10),
                fechaDeNacimiento: req.body.fechaDeNacimiento,
                dni: req.body.dni,
                fotoDePerfil: "/images/users/"+ req.body.fotoDePerfil
            }
            //console.log('Usuario a crear:', user)
            db.User.create(user)
                .then(function (user) {
                    //console.log('Nuevo usuario creado:', user)
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
        const errorlogin = validationResult(req);
      
        //revisar que no haya errores en validations
        if (!errorlogin.isEmpty()){
            // console.log("errorlogin: ", JSON.stringify(errorlogin,null,4));
            return res.render('login',{
                errors: errorlogin.mapped(),
                oldData: req.body
            })
        } 
        
        else {
            // buscamos el usuario que se quiere loguear
            db.User.findOne({ 
                where: [{ email: req.body.email }] 
            }) // FILTRO
            
            .then(function (user) {
                // seteamos la session con la info del usuario
                req.session.user = user;

                // si tildo recordarme => creamos la cookie
                if (req.body.rememberme != undefined){
                    res.cookie("userId", user.id_usuario, { maxAge: 1000 * 60 * 500})
                }
                return res.redirect('/');
            })
            .catch(function(error){
                console.log(error)
            })
        }
    },

    logout: function(req, res, next){
        req.session.destroy();
        res.clearCookie("userId");
        return res.redirect("/");
    },

    detail: function (req, res) {
        let id = req.params.id;
        const filtro = {
            include: [
                {association: 'productos'},
                {association: 'comentarios'}
            ],
        }
       
        db.User.findByPk(id, filtro)
        .then(function(resultados){
            console.log('resultados: ', resultados);
            let condition = false;
            if(req.session.user != undefined && req.session.user.id == resultados.id){
                condition = true
            }
            return res.render('profile', {
                datosUsuario: resultados,
                condition: condition,
                relacionProductos: resultados.productos,
                relacionComentarios: resultados.comentarios
            });
        })
        
        .catch(function(error){
            return console.log(error);
        })
         
    },
    
    edit: function (req, res) {
        const idUsuario = req.params.id;

        db.User.findByPk(idUsuario)
        .then(function(usuario){
            if(!usuario){
                return res.status(404).send('Usuario no encontrado');
            }
            res.render('edit', {usuario: usuario});
            // console.log('user: ', user);
        })
        .catch(function(error){
            console.log('error: ', error);
            res.status(500).send('Error en el servidor')
        })

    },

    update:function (req, res) {
        const idUsuario = req.params.id;
        
        db.User.update(
            {
                email: req.body.email, 
                usuario: req.body.usuario, 
                contrasena: bcrypt.hashSync(req.body.contrasena, 10), 
                fechaDeNacimiento: req.body.fechaDeNacimiento, 
                dni: req.body.dni, 
                fotoDePerfil: "/images/users/"+req.body.fotoDePerfil,
                recordarme: req.body.recordarme,
                updatedAt: new Date() // Actualiza la columna updatedAt con la fecha actual
            },
            {where: {id_usuario: idUsuario}}
        )
        .then(function(){
            res.redirect('/users/login')
        })
        .catch(function(error){
            console.log('error: ', error);
            res.status(500).send('Error en el servidor');
        })
        
    }

};

module.exports = usersController;
