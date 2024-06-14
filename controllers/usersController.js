/* importaríamos la base de datos */
const { where } = require('sequelize');
let db = require("../database/models"); 
const {validationResult} = require("express-validator"); 
const bcrypt = require("bcryptjs")

const op = db.Sequelize.Op;

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
            contrasena:bcrypt.hashSync(req.body.contrasena, 10),
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

    index: function (req, res) {
        //Mostramos el form de login
        return res.render('login')
    },

    login: function (req, res) {

        //Resultados de las validaciones de login
        //distinto a lo que REQUERI, lo utilizamos con su REQUEST
        const resultValidation = validationResult(req)

        //revisar que no haya errores en validations

        if(resultValidation.isEmpty()){ // porque no queremos que este vacio?
            console.log("resultValidation:", JSON.stringify(resultValidation,null,4));
            return res.render('login', {
                errors: resultValidation.mapped(),
                oldData: req.body
            })

        }

        else{

            let user = {
                email: req.body.email,
                contrasena: bcrypt.hashSync(req.body.contrasena, 10),
            }
    
            db.User.findOne({where: [{ email: email }]})
            .then(function(user){
                return res.redirect('/index')
            })
        
            .catch(function(error){ console.log(error) })

        }
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