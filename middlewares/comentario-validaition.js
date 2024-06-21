const { body } = require("express-validator");
const db= require('../database/models');



let comentarioValidations= [
    body("comentario") 
        .notEmpty().withMessage("No puedes enviar un comentario vacío.")
        .isLength({min:3}).withMessage("El comentario debe tener al menos 3 caracteres.")
];

module.exports = comentarioValidations
