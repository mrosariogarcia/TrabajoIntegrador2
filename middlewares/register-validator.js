const { body } = require("express-validator")
const db = require('../database/models')
const registerValidation = [       
    body("email")
        .notEmpty().withMessage('El campo Mail es obligatorio.').bail()
        .isEmail().withMessage("Debes escribir un formato de correo valido").bail()
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
        .notEmpty().withMessage("Es un campo obligatorio, debes completar tu nombre"),

    body("contrasena")
        .notEmpty().withMessage("Es un campo obligatorio, debes completar una constrasena")
        .isLength({ min: 4 }).withMessage('La contraseña debe tener al menos 4 caracteres')
            
]





module.exports = registerValidation