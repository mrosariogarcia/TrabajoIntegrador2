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
<<<<<<< HEAD
    .custom(function(value, {req}){
        if(value == ""){
            return true
        }
        else if(value.length < 4){
            throw new Error ('La contraseña debe tener al menos 4 caracteres')
        }
        else{
            return true
        }
    })
=======
        .notEmpty().withMessage("Es un campo obligatorio, debes completar tu contrasena")
        .custom(function(value, {req}){
            if(value && value.length < 4){
                throw new Error('La contraseña debe tener al menos 4 caracteres');
            }
        // si no hay nada en la contrasena permite que siga con la anterior
            return true;
    })   
>>>>>>> 7205fabd4c4a74d5405dc87bdee45a62020c8588
]

module.exports = editValidations;