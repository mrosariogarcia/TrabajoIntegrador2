const {body} = require("express-validator");
let db = require("../database/models");
const bcryptjs = require("bcryptjs");

const loginValidation = [

    body("email")
    .notEmpty()
    .withMessage("Debes completar tu Email")
    .isEmail()
    .withMessage("En formato de correo valido")
    .custom(function (value, { req }) {
        return db.User.findOne({
            where: {email: value },
        })
        .then(function(userToLogin){
            if(!userToLogin){
                throw new Error("No existe un usuario con ese email")
            }
        })
    }),

body("contrasena")
    .notEmpty()
    .withMessage("Es un campo obligatorio, debes completar una constrasena")
    .custom(function (value, { req }) {

        return db.User.findOne({
            where: {email: req.body.email},
        })

        .then(function(user){

            if(user != undefined){
                const contrasenaOk = bcryptjs.compareSync(value, user.contrasena);
                
                if(!contrasenaOk){
                    throw new Error("Contraseña incorrecta")
                }
            }

            else{
                throw new Error("No existe el mail, registrese");
            }
        })
    }),

]

module.exports = loginValidation;