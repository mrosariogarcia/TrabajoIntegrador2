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
        console.log(busqueda)
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
            console.log(JSON.stringify(results, null, 2))
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
                if (req.session.user != undefined && req.session.user.id == results.usuario.id) {
                    si = true;
                }
                else{ si=false}
            console.log("coments: ", JSON.stringify(data.comentarios,null, 4))
                return res.render('product', { resultado: data, comentarios: data.comentarios,si:si});
            })
            .catch(error => {
                console.log(error);
            })
    },










    agregar: function (req, res) {
        console.log(req);
    }
};

module.exports = productController;
