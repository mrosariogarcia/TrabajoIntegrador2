const { body } = require("express-validator")
const db = require('../database/models')

const editValidations = [     

    body("email")
        .notEmpty().withMessage('El campo Mail es obligatorio.')
        .isEmail().withMessage("Debes escribir un formato de correo valido")
        .custom(function (value, { req }) {
            //Desestrucutramos "req".
            return db.User.findOne({
                where: { email: value }, //Usamos el atributo value del campo input.
            })
                .then(function (user) {
                    if(user == undefined){ 
                        return true;
                    }
                    else{
                        throw new Error ('El email ya esta registado')
                    }
                })
        }),
    body("usuario")
        .notEmpty().withMessage("Es un campo obligatorio, debes completar tu nombre"),

    body("contrasena")
        .notEmpty().withMessage("Es un campo obligatorio, debes completar una constrasena")
        .isLength({ min: 4 }).withMessage('La contraseña debe tener al menos 4 caracteres')
            
]

module.exports = editValidations;