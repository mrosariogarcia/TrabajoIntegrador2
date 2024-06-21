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
                { association: 'comentarios', include:[ { association: 'user' }] },
            ]
        })
            .then(data => {
                let si = false;
                if (req.session.user != undefined && req.session.user.id == data.usuario.id) {
                    si = true;
                }
                //console.log("data: ", JSON.stringify(data, null, 4));
                //console.log("coments: ", JSON.stringify(data.comentarios, null, 4));
                //console.log('data: ', data);
                return res.render('product', { resultado: data, comentarios: data.comentarios, si: si });
            })
            .catch(error => {
                console.log(error);
            })
},

    add: function (req, res) {
        return res.render('add');
},
        
    store: function (req, res) {
        console.log('Solicitud recibida para registrar producto');
        
        const error = validationResult(req);
        if (error.isEmpty()) {

            console.log('Datos del producto:', req.body)
            //guardar el usuario en la db
            let newproduct = {
                imagen: req.body.imagen,
                producto: req.body.producto,
                descripcion: req.body.descripcion,
            }

            console.log('Producto a crear:', newproduct)
            console.log("Usuario en session", req.session)
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
            console.log('Errores de validación:', error.mapped());
            return res.render('register', { error: error.mapped(), OldProduct: req.body });
        }
        
},
};

module.exports = productController;
