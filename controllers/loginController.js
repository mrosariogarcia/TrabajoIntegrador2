const { where } = require('sequelize');
const db = require('../database/models');
const {validationResult} = require("express-validator"); 

const users = db.User;
const op = db.Sequelize.Op;

let loginController = {

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
            return res.render('login', {
                errors: resultValidation.mapped(),
                oldData: req.body
            })
        }

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