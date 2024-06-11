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
}

module.exports= loginController