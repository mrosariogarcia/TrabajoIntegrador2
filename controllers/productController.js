/* importaríamos la base de datos */
const { where, Association } = require('sequelize');
let db = require("../database/models");
// requerimos express validator y validationResult:
const { validationResult } = require("express-validator");

const Op = db.Sequelize.Op;

let productController = {

    producto: function (req, res) {
        return res.render('product', {
            info: db
        });
    },

    search: function (req, res) {
        let busqueda = req.query.search;
        //console.log(busqueda)
        let filtro = {
            where: {
                [Op.or]: [
                    { producto: { [Op.like]: "%" + busqueda + "%" } },
                    { descripcion: { [Op.like]: "%" + busqueda + "%" } }
                ]
            },
            order: [["createdAt", "DESC"]],
            include: [
                { association: 'usuario' },
                { association: 'comentarios' },
            ]
        };

        db.Product.findAll(filtro)
        .then(function (results) {
            //console.log(JSON.stringify(results, null, 2))
            return res.render("search-results", { productos: results, buscado: busqueda });
        })
        .catch(function (error) {
            console.log(error);
            return res.render('search-results', { productos: [], buscado: busqueda });
        });
},
    detalle: function (req, res) {
        let id = req.params.id;
        
        db.Product.findByPk(id, {
            // agregamos includes de generos y actores
            include: [
                { association: 'usuario' },
                { 
                    association: 'comentarios', 
                    include: [{ association: 'user' }], 
                    order: [['createdAt', 'DESC']] // Ordenar comentarios por fecha de creación descendente
                },
            ]
        })
            .then(data => {
                
                //console.log("data: ", JSON.stringify(data, null, 4));
                //console.log("coments: ", JSON.stringify(data.comentarios, null, 4));
                console.log('data: ', data);
                return res.render('product', { resultado: data, comentarios: data.comentarios, oldData: req.body, errores: {} });
            })
            .catch(error => {
                console.log(error);
            })
},
comentario: function(req, res) {
    // Verificar si el usuario está autenticado
    if (!req.session.user) {
        return res.redirect('/login');
    }

    let errores = validationResult(req);
    if (!errores.isEmpty()) {
        let id = req.params.id;

        db.Product.findByPk(id, {
            include: [
                { association: 'usuario' },
                { association: 'comentarios', include: [{ association: 'user' }] },
            ]
        })

        .then(data => {
            return res.render('product', {
                resultado: data,
                comentarios: data.comentarios,
                errores: errores.mapped(),
                oldData: req.body
            });
            
        })

        .catch(error => {
            console.log(error);
        });
    } else {
        let id_producto = req.params.id;
        let textoComentario = req.body.comentario;
        let id_usuario = req.session.user.id_usuario;
        console.log('usuario id',id_usuario)

        db.Comentario.create({
            id_usuario: id_usuario,
            id_producto: id_producto,
            texto_comentario: textoComentario
        })
        .then(comentario => {
            res.redirect(`/product/detalle/${id_producto}`);
        })
        .catch(error => {
            console.log(error);
            res.status(500).send('Error interno del servidor');
        });
    }
},


    add: function (req, res) {
        return res.render('add');
},
        
    store: function (req, res) {
        //console.log('Solicitud recibida para registrar producto');
    
        const errors = validationResult(req);
        if (errors.isEmpty()) {
        
            //console.log("Usuario en session", req.session)
            let id_usuario = req.session.user.id_usuario
            //console.log(id_usuario)

            //console.log('Datos del producto:', req.body)
            //guardar el usuario en la db
            let newproduct = {
                imagen: req.body.imagen,
                producto: req.body.producto,
                descripcion: req.body.descripcion,
                id_usuario: id_usuario // Guardar ID del usuario en el producto
            }

            console.log('Producto a crear:', newproduct)


            db.Product.create(newproduct)
                .then(function(newproduct){
                    console.log(newproduct)
                    idP = newproduct.id_producto
                    return res.redirect('detalle/' + idP)
                })
                .catch(function(error){
                    console.log(error)
                })
        }

        else{
            console.log('Errores de validación:', errors.mapped());
            return res.render('store', {
                 errors: errors.mapped(), 
                 OldProduct: req.body });
        }
        
},
borrar: function (req, res) {
    console.log('entraste a la funcion');
    let productABorrar = req.params.id;

    db.Product.findByPk(productABorrar).then((data) => {
        if (req.session.user.id_usuario != data.id_usuario) {
            return res.redirect('/');
        }
        db.Comentario.destroy({
            where: { id_producto: productABorrar }
        })
        db.Product.destroy({
            where: { id_producto: productABorrar } 
        })
            .then(() => {
                return res.redirect("/");
            })
            .catch((error) => {
                console.log(error);
            });

    })
        .catch((error) => {
            console.log(error);
        });
},

};

module.exports = productController;
