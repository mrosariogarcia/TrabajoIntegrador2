const {body} = require("express-validator");
let db = require("../database/models");

const productValidator = [

    body("producto")
        .notEmpty().withMessage('El campo Nombre del Producto es obligatorio.'),
    
    body("descripcion")
        .notEmpty().withMessage('El campo Descripción es obligatorio.'),
    
    body("imagen")
        .notEmpty().withMessage('El campo Imagen es obligatorio.').bail() // para que muestre los mensajes separados
        .isURL().withMessage('El campo Imagen debe ser una URL válida.')

]

module.exports = productValidator;