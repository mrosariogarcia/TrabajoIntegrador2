let db = require("../db/db"); //importando la lista, para mandarla a renderizar en mi objeto literal, para mostrar productos 

let productController = {
    home: function(req, res) {
        return res.render('index', {info:db})
    },
    
    searchResults:function(req,res,next){
        let searchResults = req.query.searchResults;
        let resultado = [];
        
        
        for (let i = 0; i < db.productos.length; i++) {
        console.log(db.productos[i].producto==searchResults);

            let productoABuscar = db.productos[i].producto;

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