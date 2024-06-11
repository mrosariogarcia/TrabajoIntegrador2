/* importaríamos la base de datos */

const db = require("../database/models"); 
const op = db.Sequelize.Op;

let usersController = {

    register: function(req,res){
        return res.render('register')
    },
    store:function(req,res){
        //guardar el usuario en la db
        let user = {
            email:req.body.email,
            nombre:req.body.name,
            contrasena:req.body.contrasena,
            fechanac:req.body.fechanac,
            dni:req.body.dni,
            fotoPerfil: req.body.fotoPerfil,
        };
        console.log(db.User);
        db.User.create(user)
        console.log(db.Users)
        .then( function(user){
            return res.redirect('/login')
        })
        .catch(function(e){console.log(e)})
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