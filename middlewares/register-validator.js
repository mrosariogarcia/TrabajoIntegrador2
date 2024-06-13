const { body } = require("express-validator")
const db = require('../database/models')
const bcryptjs = require("bcryptjs")

const registerValidation = [       
    body("email")
        .isEmail()
        .withMessage("Debes escribir un formato de correo valido")
        .custom(function (value, { req }) {
            //Desestrucutramos "req".
            return db.User.findOne({
                where: { email: value }, //Usamos el atributo value del campo input.
            })
                .then(function (user) {
                    if (user) {
                        throw new Error('El email ingresado ya esta ingresado.');
                    }
                })
        }),
    body("name")
        .notEmpty()
        .withMessage("Es un campo obligatorio, debes completar tu nombre")
        .isString()
        .withMessage("Debes completar tu nombre en texto"),

    body("contrasena")
        .notEmpty()
        .withMessage("Debes completar una constrasena"),
    
]





module.exports = registerValidation