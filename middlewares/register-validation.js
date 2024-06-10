const {body} = require('express-validator');

const registerValidations = [
    body('email')
        .notEmpty()
        .withMessage('Debes completar tu email')
        .isEmail
        //.withMessage('Debes escribir en un formato de correo válido')
];


module.exports = registerValidations;