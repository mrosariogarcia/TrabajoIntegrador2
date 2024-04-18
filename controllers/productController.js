let db = require("../db/db"); //importando la lista, para mandarla a renderizar en mi objeto literal, para mostrar productos 

let productController = {
    producto: function(req, res) {
        return res.render('product', 
        {info:db})
    },
    
    searchResults:function(req,res,next){
        let searchResults = req.params.searchResults;
        
        let resultado = [];

        for (let i = 0; i < db.productos.length; i++) {
            let productoABuscar = db.productos[i].producto;
            
            console.log(productoABuscar == searchResults);

            if (searchResults == productoABuscar){
                resultado.push(db.productos[i])
            }
        }
        console.log(resultado);

        if (resultado.length >= 1){
            return res.render("search-results", {
                mensaje: `Éstos son los resultados que encontramos para ${searchResults}`,
                resultados: resultado
            })
        }
        else {
            return res.render("search-results", {
                mensaje: `No hay productos para para ${searchResults}`,
                resultados: resultado
            })
        } 
    },
    detalle:function (req,res) {
        let idEnviado = req.params.id
        let detalleProducto = []
        for (let i = 0; i < db.productos.length; i++) {
            if (idEnviado == db.productos[i].id) {
                detalleBanda.push(db.productos[i])
                return res.render('product',{
                    info:detalleProducto
                })
            }
        }
        return res.render('idNovalido',{
            mensaje:'No existe el id:'+ idEnviado +', intente nuevamente con otro.'
        })
        
        
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