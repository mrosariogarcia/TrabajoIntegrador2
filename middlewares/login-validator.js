const {body} = require("express-validator");
let db = require("../database/models");
const bcryptjs = require("bcryptjs");

const loginValidation = [

    body("email")
        .notEmpty() // verifica que el campo no este vacio
        .withMessage("Debes completar tu Email")
        .bail()
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
            console.log('value: ', value);
            
            return db.User.findOne({
                where: {email: req.body.email}, // accedemos al request
            })

            .then(function(user){
                if(user != undefined){ // en la clase puso solo: if(user){ 
                    const password = user.contrasena;
                    console.log('password: ', password);
                    const passwordOk = bcryptjs.compareSync(value, password);
                    console.log('passwordOk: ', passwordOk);

                    if (!passwordOk){
                        throw new Error('Contraseña incorrecta')
                    }
                }         
                else{
                    throw new Error('No existe el mail, registrese')
                }
            })
            // .catch(function(error){
            //     console.log("Error en la validación de la contraseña: ", error);
            //     throw new Error('Error en la validación de la contraseña')
            // })
        }),

]

module.exports = loginValidation;