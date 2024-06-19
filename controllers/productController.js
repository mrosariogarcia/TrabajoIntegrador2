const { where, Association } = require('sequelize');
let db = require("../database/models");
const { validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const Op = db.Sequelize.Op;

let productController = {

    producto: function (req, res) {
        return res.render('product', {
            info: db
        });
    },

    search: function (req, res) {
        let busqueda = req.query.search;
        let filtro = {
            where: {
                [Op.or]: [
                    { producto: { [Op.like]: "%" + busqueda + "%" } },
                    { descripcion: { [Op.like]: "%" + busqueda + "%" } }
                ]
            },
            order: [["createdAt", "DESC"]],
            include: [
                { association: 'comentarios' },
                { association: 'usuario' }
            ]
        };

        db.Product.findAll(filtro)
            .then(function (results) {
                return res.render("search-results", { productos: results });
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    detalle: function (req, res) {
        let idEnviado = req.params.id;
        let productoEnviado = req.params.producto;
        let detalleProducto = [];

        for (let i = 0; i < db.products.length; i++) {
            let idProducto = db.productos[i].id;
            if (idEnviado == idProducto) {
                detalleProducto.push(db.productos[i]);
            }
        }

        if (detalleProducto.length >= 1) {
            return res.render('product', {
                mensaje: `Éste es el detalle del producto ${productoEnviado}.`,
                info: detalleProducto
            });
        } else {
            return res.render('product', {
                mensaje: `No encontramos detalle del producto ${productoEnviado}.`,
                info: detalleProducto
            });
        }
    },

    agregar: function (req, res) {
        console.log(req);
    }
};

module.exports = productController;
