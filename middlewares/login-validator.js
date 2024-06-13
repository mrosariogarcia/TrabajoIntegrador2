const {body} = require("express-validator");

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
        .withMessage("Debes completar una constraseña")
        .custom(function (value, { req }) {
            return db.User.findOne({
                where: {email: req.body.email}
            })
            .then(function(user){
                if(user){
                    //solo si encuentra al usuario con ese mail, comparamos las constraseñas
                    const password = user.password;
                    const passwordOk= bcryptjs.compareSync(value,password); //preguntar porque
                    if(!passwordOk){
                        throw new Error("Contraseña incorrecta")
                    }                    
                }
            })
        }),

]

module.exports = loginValidation;