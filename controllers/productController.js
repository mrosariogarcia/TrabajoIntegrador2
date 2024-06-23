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
        let filtro = {
            include: [
                { association: 'usuario' },
                { 
                    association: 'comentarios', 
                    include: [{ association: 'user' }], 
                    order: [['createdAt', 'DESC']] // Ordenar comentarios por fecha de creación descendente
                },
            ],
            order: [[{ model: db.Comentario, as: 'comentarios' }, 'createdAt', 'DESC']]
        }
        let condition = false;

        db.Product.findByPk(id, filtro)
            .then(function(rta){
                // console.log('rta: ', JSON.stringify(rta, null, 2));
                if (!rta){
                    return res.status(404).send('Producto no encontrado')
                }
                if (req.session.user != undefined && req.session.user.id_usuario == rta.id){
                    condition = true;
                }
                res.render('product', {
                    resultado: rta,
                    comentarios: rta.comentarios,
                    condition: condition,
                    user: req.session.user,
                    oldData: req.body, 
                    errores: {}
                });
            })
            .catch(function(error){
                console.log('error: ', error);
                return res.status(500).send('Error en el servidor')
            })


        // // como tenia antes
        // db.Product.findByPk(id, {
        //     // agregamos includes de generos y actores
        //     include: [
        //         { association: 'usuario' },
        //         { 
        //             association: 'comentarios', 
        //             include: [{ association: 'user' }], 
        //             order: [['createdAt', 'DESC']] // Ordenar comentarios por fecha de creación descendente
        //         },
        //     ], 
        //     // order: [[{model: db.Comentarios, as: 'comentarios'}, 'createdAt', 'DESC']]
        // })
        //     .then(data => {
                
        //         //console.log("data: ", JSON.stringify(data, null, 4));
        //         //console.log("coments: ", JSON.stringify(data.comentarios, null, 4));
        //         console.log('data: ', data);
        //         return res.render('product', { resultado: data, comentarios: data.comentarios, oldData: req.body, errores: {} });
        //     })
        //     .catch(error => {
        //         console.log(error);
        //     })
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
                imagen: '/images/products/'+req.body.imagen,
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
showEdit: function(req, res){ // mostrar el formulario de edicion
    const idProducto = req.params.id;

    db.Product.findByPk(idProducto)
    .then(function(prod){
        if(!prod){
            return res.status(404).send('Producto no encontrado');
        }
        res.render('product-edit', {producto: prod});
    })
    .catch(function(error){
        console.log('error: ', error);
        res.status(500).send('Error en el servidor');
    })

},
edit: function (req, res) { // actualizar el producto
    const idProducto = req.params.id;

    console.log('producto editado: ', req.body);

    let productoEditado = {
        imagen: req.body.imagen,
        producto: req.body.producto,
        descripcion: req.body.descripcion
    }

    // db.Product.update(
    //     {
            
    //     },
    //     {
    //         where: {
    //             id: idProducto
    //         }
    //     }
    // )


    // const resultValidation = validationResult(req);
    // let id_del_producto = req.params.id

    // if(!resultValidation.isEmpty()){
    //     console.log('resultValidation: ', JSON.stringify(resultValidation, null, 4));

    //     return db.Products.findByPk(id_del_producto)
    //         .then(function(prod){
    //             res.render('product-edit', {
    //                 prod: prod,
    //                 errors: resultValidation.mapped(),
    //                 oldData: req.body
    //             });
    //         })
    //         .catch(function(error){
    //             console.log(error);
    //         })
    // }
    // else{
    //     let editar = {
    //         imagen: req.body.imagen,
    //         nomProducto: req.body.producto,
    //         descripcionProducto: req.body.descripcion
    //     }
    //     db.Product.update(editar, {
    //         where: {idProducto: id_del_producto}
    //     })
    //         .then(function(data){
    //             res.redirect('/product/product-edit');
    //         }) 
    //         .catch(function(error){
    //             console.log(error);
    //         })
    // }
}

//     let id = req.params.id;
//     let filtro = {
//         include: [
//             {association: usuario}
//         ]
//     };
//     //VERIFICAR QUE SOLO EL USUARIO PUEDE EDITAR LOS PRODUCTOS QUE SUBE
//     db.Product.findByPk(id, filtro)
//         .then(function(rta){
//             if(!rta){
//                 return res.status(404).send('Producto no encontrado en edit')
//             }
//             res.render('product-edit', {
//                 producto: rta
//             })
//         })
//         .catch(function(error){
//             console.log(error);
//             res.status(500).send('Error en el servidor en edit')
//         })
// }

}


module.exports = productController;