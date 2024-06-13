let datos = {
    usuario: {
        email: 'julioperez@gmail.com', 
        usuario: 'juliope',
        contrasena: 'elMascrack',
        fechaDeNacimiento: '2000-05-25',
        dni: 40887455,
        fotoDePerfil:'/images/users/juli.png'
    },

    productos: [
        {
            id: 1,
            producto: 'Modelo Zaun',
            descripcion: '"Estilo vibrante para todos los días."',
            imagen: '/images/products/Anteojos1.png',
            comentarios: [
                {
                    nombreUsuario: "Trinita004",
                    textoComentario: "Me encanta cómo estos anteojos complementan mi outfit!",
                    imagenPerfil: "/images/users/trini.png"
                },
                {
                    nombreUsuario: "cortiValen",
                    textoComentario: "Son tan cómodos que ni siquiera siento que los llevo puestos.",
                    imagenPerfil: "/images/users/valen.png"
                },
                {
                    nombreUsuario: "Juana_G",
                    textoComentario: "Estos anteojos son perfectos para cualquier ocasión."                    ,
                    imagenPerfil: "/images/users/juana.png"
                }
            ]
        },
        {
            id: 2,
            producto: 'Modelo Gallery',
            descripcion: 'Elegancia y versatilidad en cada mirada.',
            imagen: '/images/products/Anteojos2.png',
            comentarios: [
                {
                    nombreUsuario: "Roch197",
                    textoComentario: "¡Qué buena elección de colores! Realmente destacan."                    ,
                    imagenPerfil: "/images/users/rochi.png"
                },
                {
                    nombreUsuario: "FeliQui89",
                    textoComentario: "Me siento más seguro de mí mismo usando estos anteojos."                    ,
                    imagenPerfil: "/images/users/feli.png"
                },
                {
                    nombreUsuario: "cortiValen",
                    textoComentario: "¡Son tan cancheros que siempre recibo cumplidos cuando los uso!"                    ,
                    imagenPerfil: "/images/users/valen.png"
                }    
            ]
        },
        {
            id: 3,
            producto: 'Modelo Ice',
            descripcion: 'Colores que destacan en cualquier ocasión',
            imagen: '/images/products/Anteojos3.png',
            comentarios: [
                {
                    nombreUsuario: "Juana_G",
                    textoComentario: "Un exito, lo usan todos mis hijos!",
                    imagenPerfil: "/images/users/juana.png"
                },
                {
                    nombreUsuario: "Trinita004",
                    textoComentario: "Buena calidad",
                    imagenPerfil: "/images/users/trini.png"
                },
                {
                    nombreUsuario: "Roch197",
                    textoComentario: "¡Estos anteojos le dan un toque único a mi estilo!"                    ,
                    imagenPerfil: "/images/users/rochi.png"
                }   
            ]
        },
        {
            id: 4,
            producto: 'Modelo Earl',
            descripcion: 'Modernidad y comodidad en un diseño único',
            imagen: '/images/products/Anteojos4.png',
            comentarios: [
                {
                    nombreUsuario: "FeliQui89",
                    textoComentario: "No puedo creer lo ligeros que son. ¡Son geniales!"                    ,
                    imagenPerfil: "/images/users/feli.png"
                },
                {
                    nombreUsuario: "cortiValen",
                    textoComentario: "Definitivamente una excelente inversión en accesorios."                    ,
                    imagenPerfil: "/images/users/valen.png"
                },
                {
                    nombreUsuario: "Roch197",
                    textoComentario: "¡Son tan versátiles que puedo usarlos con todo!"                    ,
                    imagenPerfil: "/images/users/rochi.png"
                }   
            ]
        },
        {
            id:5,
            producto: 'Modelo Flaneur',
            descripcion: 'Impacta con un toque de sofisticación',
            imagen: '/images/products/Anteojos5.png',
            comentarios: [
                {
                    nombreUsuario: "Juana_G",
                    textoComentario: "¡Mis amigos siempre me preguntan dónde conseguí estos anteojos!"                    ,
                    imagenPerfil: "/images/users/juana.png"
                },
                {
                    nombreUsuario: "Trinita004",
                    textoComentario: "Muy caro",
                    imagenPerfil: "/images/users/trini.png"
                },
                {
                    nombreUsuario: "FeliQui89",
                    textoComentario: "¡Me siento como una estrella de cine con estos anteojos!"                    ,
                    imagenPerfil: "/images/users/feli.png"
                }    
            ]
        },
        {
            id:6,
            producto: 'Modelo Square',
            descripcion: 'El accesorio perfecto para realzar tu estilo.',
            imagen: '/images/products/Anteojos6.png',

            comentarios: [
                {
                    nombreUsuario: "cortiValen",
                    textoComentario: "Precio-calidad, super recomendado",
                    imagenPerfil: "/images/users/valen.png"
                },
                {
                    nombreUsuario: "Juana_G",
                    textoComentario: "¡Son el regalo perfecto para cualquier amante de la moda!"                    ,
                    imagenPerfil: "/images/users/juana.png"
                },
                {
                    nombreUsuario: "Trinita004",
                    textoComentario: "¡Me encanta cómo se adaptan a la forma de mi rostro!"                    ,
                    imagenPerfil: "/images/users/trini.png"
                }   
            ]
        },
        {
            id:7,
            producto: 'Modelo Valencia',
            descripcion: 'Cancheros y llenos de personalidad.',
            imagen: '/images/products/Anteojos7.png',
            comentarios: [
                {
                    nombreUsuario: "Roch197",
                    textoComentario: "¡Estoy obsesionado con estos anteojos! No puedo parar de usarlos."                    ,
                    imagenPerfil: "/images/users/rochi.png"
                },
                {
                    nombreUsuario: "FeliQui89",
                    textoComentario: "¡Los colores de estos anteojos realmente iluminan mi rostro!"                    ,
                    imagenPerfil: "/images/users/feli.png"
                },
                {
                    nombreUsuario: "cortiValen",
                    textoComentario: "¡Son tan duraderos que sé que los disfrutaré durante mucho tiempo!"                    ,
                    imagenPerfil: "/images/users/valen.png"
                }
            ]
        },
        {   id:8,
            producto: 'Modelo True Collin',
            descripcion: 'Refleja tu estilo con estos anteojos llamativos.',
            imagen: '/images/products/Anteojos8.png',
            comentarios: [
                {
                    nombreUsuario: "cortiValen",
                    textoComentario: "Gran durabilidad",
                    imagenPerfil: "/images/users/valen.png"
                },
                {
                    nombreUsuario: "Roch197",
                    textoComentario: "¡No puedo creer lo asequibles que son para la calidad que ofrecen!"                    ,
                    imagenPerfil: "/images/users/rochi.png"
                },
                {
                    nombreUsuario: "Juana_G",
                    textoComentario: "¡Los colores de estos anteojos realmente iluminan mi rostro!"                    ,
                    imagenPerfil: "/images/users/juana.png"
                }
            ]
        },
        {
            id:9,
            producto: 'Modelo Ridder',
            descripcion: 'Combina moda y funcionalidad en cada par.',
            imagen: '/images/products/Anteojos9.png',
            comentarios: [
                {
                    nombreUsuario: "Trinita004",
                    textoComentario: "¡Me encanta cómo puedo cambiar mi estilo con solo cambiar de anteojos!",
                    imagenPerfil: "/images/users/trini.png"
                },
                {
                    nombreUsuario: "FeliQui89",
                    textoComentario: "Me gustaria que vengan mas chiquitos",
                    imagenPerfil: "/images/users/feli.png"
                },
                {
                    nombreUsuario: "cortiValen",
                    textoComentario: "Ideal precio-calidad",
                    imagenPerfil: "/images/users/valen.png"
                }   
            ]
        },
        {
            id:10,
            producto: 'Modelo Capital',
            descripcion: 'Resalta tu look con estos anteojos imprescindibles.',
            imagen: '/images/products/Anteojos10.png',
            comentarios: [
                {
                    nombreUsuario: "Roch197",
                    textoComentario: "Un exito",
                    imagenPerfil: "/images/users/rochi.png"
                },
                {
                    nombreUsuario: "Juana_G",
                    textoComentario: "¡Estos anteojos son el toque final perfecto para cualquier look!",
                    imagenPerfil: "/images/users/juana.png"
                },
                {
                    nombreUsuario: "FeliQui89",
                    textoComentario: "Gran calidad",
                    imagenPerfil: "/images/users/feli.png"
                }    
            ]
        }
    ]
};

module.exports = datos;