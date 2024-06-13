const { where } = require('sequelize');
const db = require('../database/models');
const users = db.User;
const op = db.Sequelize.Op;

let loginController = {

    index: function (req, res) {
        //Mostramos el form de login
        return res.render('login')
    },

    login: function (req, res) {

        let user = {
            email: req.body.email,
            contrasena:req.body.contrasena,
        }

        db.User.findOne({where: [{ email: email }]})
        .then(function(user){
            return res.redirect('/login')
        })
    
        .catch(function(error){ console.log(error) })

    },
}

module.exports= loginController