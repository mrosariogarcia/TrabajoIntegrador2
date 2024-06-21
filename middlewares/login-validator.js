const {body} = require("express-validator");
let db = require("../database/models");
const bcryptjs = require("bcryptjs");

const loginValidation = [

    body("email")
        .notEmpty() // verifica que el campo no este vacio
        .withMessage("Debes completar tu Email")
        .isEmail() // verifica que sea un email valido
        .withMessage("Debes escribir un formato de correo valido")
        .custom(function(value, {req}){ // verifica que el email NO exista
            return db.User.findOne({
                where: {email: value}, // usamos el atributo del campo input
            })
            .then(function(userToLogin){
                if(!userToLogin){
                    throw new Error("No existe un usuario con ese email")
                }
            })
        }),
    
    body("contrasena")
        .notEmpty()
        .withMessage("Es un campo obligatorio, debes completar una constraseña")
        .custom(function (value, {req}) { // desestructuramos 'req'
            
            return db.User.findOne({
                where: {email: req.body.email}, // accedemos al request
            })

            .then(function(user){
                if(!user){ // en la clase puso solo: if(user){ //  != undefined)
                    const contrasena = user.contrasena
                    const contrasenaOk = bcryptjs.compareSync(value, contrasena) // primer parametro: el valor que recibe contraseña ; segundo parametro: contrasena
                    //console.log("contrasenaOk:", contrasenaOk);
                    if(!contrasenaOk){
                        throw new Error("Contraseña incorrecta")
                    }
                }

                // else{
                //     throw new Error("No existe el mail, registrese");
                // }
            })
        }),

]

module.exports = loginValidation;