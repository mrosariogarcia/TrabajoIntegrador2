let db = require("../db/db"); //importando la lista, para mandarla a renderizar en mi objeto literal, para mostrar productos 

let productController = {
    producto: function(req, res) {
        return res.render('product', {
            info:db
        })
    },
    
    searchResults:function(req,res){
        res.render('search-results', {
            info:db.productos
        })
    },

    detalle:function(req,res){
        let idEnviado = req.params.id;
        let productoEnviado = req.params.producto;
        let detalleProducto = [];

        for (let i = 0; i < db.products.length; i++) {
            let idProducto = db.productos[i].id;
            if (idEnviado == idProducto){
                detalleProducto.push(db.productos[i])
            }      
        };
        if (detalleProducto.length >= 1){
            return res.render('product', {
                mensaje: `Éste es el detalle del producto ${productoEnviado}.`,
                info:detalleProducto
            })
        }
        else {
            return res.render('product', {
                mensaje: `No encontramos detalle del producto ${productoEnviado}.`,
                info:detalleProducto
            })
        }
    }

    // <% for(let i=0; i < info.productos.length; i++ ) { %>
    //     <li>
    //         <img src="/<%= info.productos[i].imagen %>" alt="<%= info.productos[i].nombre %>">
    //         <h2><%= info.productos[i].producto %></h2>
    //         <p><%= info.productos[i].descripcion %></p>
    //     </a>                   
    //     </li>

    //     <%}%>
}

module.exports = productController