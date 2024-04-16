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
            producto: 'Modelo Zaun',
            descripcion: '',
            imagen: '/images/products/',
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
            producto: 'Modelo Gallery',
            descripcion: '',
            imagen: './public/images/',
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
            producto: 'Modelo Ice',
            descripcion: '',
            imagen: '/images/products/',
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
            producto: 'Modelo Earl',
            descripcion: '',
            imagen: './public/images/',
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
            producto: 'Modelo Flaneur',
            descripcion: '',
            imagen: './public/images/',
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
            producto: 'Modelo Square',
            descripcion: '',
            imagen: './public/images/',

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
            producto: 'Modelo Valencia',
            descripcion: '',
            imagen: './public/images/',
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
            producto: 'Modelo True Collin',
            descripcion: '',
            imagen: './public/images/',
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
            producto: 'Modelo Ridder',
            descripcion: '',
            imagen: './public/images/',
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
            producto: 'Modelo Capital',
            descripcion: '',
            imagen: '/images/products/',
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