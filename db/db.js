let datos = {
    usuario: {
        email: 'julioperez@gmail.com', 
        usuario: 'juliope',
        contrasena: 'elMascrack',
        fechaDeNacimiento: '2000-05-25',
        DNI: 40887455,
        fotoDePerfil: './public/images/foto_de_perfil.jpg'
    },

    productos: [
        {
            id: 1,
            producto: 'Lapiz negro',
            descripcion: 'El Lápiz Negro Noris Staedtler es la elección perfecta para aquellos que buscan calidad y precisión en su escritura o dibujo.',
            imagen: './public/images/lapiz_negro.jpg',
            comentarios: [
                {
                    nombreUsuario: "Trinita004",
                    textoComentario: "La variedad de colores es perfecta para mis proyectos de arte",
                    imagenPerfil: " "
                },
                {
                    nombreUsuario: "cortiValen",
                    textoComentario: "El trazo es suave y preciso. Definitivamente los recomendaría",
                    imagenPerfil: " "
                },
                {
                    nombreUsuario: "Juana_G",
                    textoComentario: "Borra tinta tambien!",
                    imagenPerfil: " "
                }
            ]
        },
        {
            id: 2,
            producto: 'Lapices de colores x12',
            descripcion: 'Este set de lápices de alta calidad te permitirá dar rienda suelta a tu creatividad y expresarte a través del arte.',
            imagen: './public/images/lapices_colores.jpg',
            comentarios: [
                {
                    nombreUsuario: "Roch197",
                    textoComentario: "Muy buena punta",
                    imagenPerfil: " "
                },
                {
                    nombreUsuario: "FeliQui89",
                    textoComentario: "Lo recomiendo para iniciar las clases",
                    imagenPerfil: " "
                },
                {
                    nombreUsuario: "cortiValen",
                    textoComentario: "El trazo es suave y preciso. Definitivamente los recomendaría",
                    imagenPerfil: " "
                }    
            ]
        },
        {
            id: 3,
            producto: 'Marcadores de colores x12',
            descripcion: 'Estos marcadores de doble punta, una biselada y otra redonda, son ideales para una amplia gama de aplicaciones artísticas como manga, retratos, bocetos, dibujo y diseño.',
            imagen: './public/images/marcadores_colores.jpg',
            comentarios: [
                {
                    nombreUsuario: "Juana_G",
                    textoComentario: "Un exito, lo usan todos mis hijos!",
                    imagenPerfil: " "
                },
                {
                    nombreUsuario: "Trinita004",
                    textoComentario: "Buena calidad",
                    imagenPerfil: " "
                },
                {
                    nombreUsuario: "Roch197",
                    textoComentario: "Funciona tambien para lapices de colores",
                    imagenPerfil: " "
                }   
            ]
        },
        {
            id: 4,
            producto: 'Marcador indeleble negro',
            descripcion: 'Este marcador permanente es de alta calidad y durabilidad.',
            imagen: './public/images/marcador_indeleble.jpg',
            comentarios: [
                {
                    nombreUsuario: "FeliQui89",
                    textoComentario: "Gran calidad",
                    imagenPerfil: " "
                },
                {
                    nombreUsuario: "cortiValen",
                    textoComentario: "Funciona muy bien",
                    imagenPerfil: " "
                },
                {
                    nombreUsuario: "Roch197",
                    textoComentario: "Gran adhesivo",
                    imagenPerfil: " "
                }   
            ]
        },
        {
            id:5,
            producto: 'Tijera',
            descripcion: 'Esta tijera es un producto de alta calidad, ideal para uso en oficinas, comercios o el hogar.',
            imagen: './public/images/tijera.jpg',
            comentarios: [
                {
                    nombreUsuario: "Juana_G",
                    textoComentario: "Si bien es caro, lo tengo hace 2 anos y no se me seco,un exito la compra",
                    imagenPerfil: " "
                },
                {
                    nombreUsuario: "Trinita004",
                    textoComentario: "Muy caro",
                    imagenPerfil: " "
                },
                {
                    nombreUsuario: "FeliQui89",
                    textoComentario: "Gran durabilidad",
                    imagenPerfil: " "
                }    
            ]
        },
        {
            id:6,
            producto: 'Voligoma',
            descripcion: 'Adhesivo sintético voligoma transparente x30 ml.',
            imagen: './public/images/voligoma.jpg',

            comentarios: [
                {
                    nombreUsuario: "cortiValen",
                    textoComentario: "Precio-calidad, super recomendado",
                    imagenPerfil: " "
                },
                {
                    nombreUsuario: "Juana_G",
                    textoComentario: "Ideal para la escuela",
                    imagenPerfil: " "
                },
                {
                    nombreUsuario: "Trinita004",
                    textoComentario: "Gran paleta de colores",
                    imagenPerfil: " "
                }   
            ]
        },
        {
            id:7,
            producto: 'Goma de borrar',
            descripcion: 'Este producto de alta calidad, de color blanco y forma rectangular, viene en un pack de dos unidades, lo que garantiza que siempre tendrás una a mano.',
            imagen: './public/images/goma_de_borrar.jpg',
            comentarios: [
                {
                    nombreUsuario: "Roch197",
                    textoComentario: "Colores varios",
                    imagenPerfil: " "
                },
                {
                    nombreUsuario: "FeliQui89",
                    textoComentario: "Se lo recomiendo para ninos mayores de 10 anos",
                    imagenPerfil: " "
                },
                {
                    nombreUsuario: "cortiValen",
                    textoComentario: "Buen filo",
                    imagenPerfil: " "
                }
            ]
        },
        {   id:8,
            producto: 'Hojas rayadas A4',
            descripcion: 'Este repuesto escolar es un producto de alta calidad, diseñado para satisfacer las necesidades tanto de estudiantes como de profesionales.',
            imagen: './public/images/hojas_rayadas.jpg',
            comentarios: [
                {
                    nombreUsuario: "cortiValen",
                    textoComentario: "Gran durabilidad",
                    imagenPerfil: " "
                },
                {
                    nombreUsuario: "Roch197",
                    textoComentario: "Buenos colores",
                    imagenPerfil: " "
                },
                {
                    nombreUsuario: "Juana_G",
                    textoComentario: "Producto basico de la cartuchera, gran adquisicion",
                    imagenPerfil: " "
                }
            ]
        },
        {
            id:9,
            producto: 'Hojas cuadriculadas A4',
            descripcion: 'Este repuesto escolar es un producto de alta calidad, diseñado para satisfacer las necesidades tanto de estudiantes como de profesionales, ideales para calculos matematicos y/o graficar.',
            imagen: './public/images/hojas_cuadriculadas.jpg',
            comentarios: [
                {
                    nombreUsuario: "Trinita004",
                    textoComentario: "Se me rompen los aujeros rapidamente",
                    imagenPerfil: " "
                },
                {
                    nombreUsuario: "FeliQui89",
                    textoComentario: "Me gustaria que vengan mas hojas",
                    imagenPerfil: " "
                },
                {
                    nombreUsuario: "cortiValen",
                    textoComentario: "Ideal precio-calidad",
                    imagenPerfil: " "
                }   
            ]
        },
        {
            id:10,
            producto: 'Resaltador amarillo',
            descripcion: 'Su diseño ergonómico permite un uso cómodo y prolongado. La tinta de alta calidad asegura una aplicación suave y uniforme, sin manchas ni desvanecimientos.',
            imagen: './public/images/resaltador_amarillo.jpg',
            comentarios: [
                {
                    nombreUsuario: "Roch197",
                    textoComentario: "Variedad de colores, un exito",
                    imagenPerfil: " "
                },
                {
                    nombreUsuario: "Juana_G",
                    textoComentario: "Punta gorda, ideal para ninos",
                    imagenPerfil: " "
                },
                {
                    nombreUsuario: "FeliQui89",
                    textoComentario: "Gran calidad",
                    imagenPerfil: " "
                }    
            ]
        }
    ]
};

module.exports = datos;