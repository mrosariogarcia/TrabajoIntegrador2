-- Creación de la base de datos

CREATE SCHEMA trabajoIntegrador;

USE trabajoIntegrador;

-- Creación de la tabla usario
CREATE TABLE usuario (
id_usuario INT UNSIGNED PRIMARY KEY auto_increment,
email VARCHAR(255),
contrasena VARCHAR(255),
fecha DATE,
dni INT,
fotoPerfil TEXT,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Creación de la tabla productos

CREATE TABLE productos(
id_producto INT UNSIGNED PRIMARY KEY auto_increment,
id_usuario INT UNSIGNED,
nombreProducto TEXT,
imagenProducto TEXT,
descripcionProducto TEXT,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

-- Creación de la tabla comentarios

CREATE TABLE comentarios(
id_comentario INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
id_usuario INT UNSIGNED,
id_producto INT UNSIGNED,
comentarios TEXT,
createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
deletedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario),
FOREIGN KEY (id_producto) REFERENCES productos(id_producto)
);
-- Inserción de usuarios
INSERT INTO usuario (id_usuario,email, contrasena, fecha, dni, fotoPerfil)
VALUES 
(DEFAULT,'juanagrether@gmail.com', 'contraseña1', '2005-05-28', 46753188, '/img/foto_perfil1.jpg'),
(DEFAULT,'trinidadfontan@gmail.com', 'contraseña2', '2004-02-02', 45751382, '/img/foto_perfil2.jpg'),
(DEFAULT,'rosariogarcia@gmail.com', 'contraseña3', '2005-03-03', 456789123, '/img/foto_perfil3.jpg'),
(DEFAULT,'simongonzales@gmail.com', 'contraseña4', '1999-04-04', 654903789, '/img/foto_perfil4.jpg'),
(DEFAULT,'luciaperes@gmail.com', 'contraseña5', '2000-05-05', 321089456, '/img/foto_perfil5.jpg');


-- Inserción de productos
INSERT INTO productos (id_producto,id_usuario,nombreProducto, imagenProducto,  descripcionProducto)
VALUES 
(DEFAULT,1, 'Modelo Zaun','imagen_zaun.jpg', 'Estilo vibrante para todos los días.'),
(DEFAULT,2, 'Modelo Gallery','imagen_gallery.jpg', 'Elegancia y versatilidad en cada mirada.'),
(DEFAULT,3, 'Modelo Ice', 'imagen_icehojas.jpg','Colores que destacan en cualquier ocasión.'),
(DEFAULT,4, 'Modelo Earl', 'imagen_earl.jpg', 'Modernidad y comodidad en un diseño único.'),
(DEFAULT,5, 'Modelo Flaneur','imagen_flaneurtijera.jpg',  'Impacta con un toque de sofisticación.'),
(DEFAULT,1, 'Modelo Square','imagen_square.jpg', 'El accesorio perfecto para realzar tu estilo.'),
(DEFAULT,2,'Modelo Valencia','imagen_valencia.jpg','Cancheros y llenos de personalidad.'),
(DEFAULT,3,'Modelo True Collin','imagen_collin.jpg','Refleja tu estilo con estos anteojos llamativos.'),
(DEFAULT,4,'Modelo Ridder', 'imagen_ridder.jpg','Combina moda y funcionalidad en cada par.'),
(DEFAULT,5,'Modelo Capital','imagen_capital.jpg','Resalta tu look con estos anteojos imprescindibles.');

-- Inserción de comentarios
INSERT INTO comentarios (id_comentario,id_usuario,id_producto, comentarios)
VALUES 
(DEFAULT,1, 1, '¡Estos anteojos son el toque final perfecto para cualquier look!'),
(DEFAULT,2, 1, 'Ideal precio-calidad. Definitivamente los recomendaría'),
(DEFAULT,3, 1, 'Gran calidad'),
(DEFAULT,4, 2, 'Me gustaria que vengan mas chiquitos'),
(DEFAULT,5, 2, 'Variedad de colores, un exito'),
(DEFAULT,1, 2, '¡Me encanta cómo puedo cambiar mi estilo con solo cambiar de anteojos!'),
(DEFAULT,2, 3, 'Ideal precio-calidad'),
(DEFAULT,3, 3, '¡Los colores de estos anteojos realmente iluminan mi rostro!'),
(DEFAULT,4, 3, '¡No puedo creer lo asequibles que son para la calidad que ofrecen!'),
(DEFAULT,5, 4, 'Gran adquisicion '),
(DEFAULT,1, 4, 'Gran durabilidad'),
(DEFAULT,2, 4, '¡Son tan duraderos que sé que los disfrutaré durante mucho tiempo!'),
(DEFAULT,3, 5, 'Buen marco'),
(DEFAULT,4, 5, '¡Los colores de estos anteojos realmente iluminan mi rostro!'),
(DEFAULT,1, 5, 'No puedo elegir Colores'),
(DEFAULT,2, 6, '¡Estoy obsesionado con estos anteojos! No puedo parar de usarlos.'),
(DEFAULT,3, 6, 'Ideal para la universidad'),
(DEFAULT,4, 6, 'Precio-calidad, super recomendado'),
(DEFAULT,5, 7, 'Cancheros y llenos de personalidad.'),
(DEFAULT,1, 7, 'muy caro'),
(DEFAULT,2, 7, 'Si bien es caro, lo tengo hace 2 anos y no se me los saco,un exito la compra'),
(DEFAULT,3, 8, '¡Son el regalo perfecto para cualquier amante de la moda!'),
(DEFAULT,4, 8, 'El accesorio perfecto para realzar tu estilo.'),
(DEFAULT,5, 8, 'Gran calidad'),
(DEFAULT,1, 9, '¡Me siento como una estrella de cine con estos anteojos!'),
(DEFAULT,2, 9, 'Buena calidad'),
(DEFAULT,3, 9, '¡Mis amigos siempre me preguntan dónde conseguí estos anteojos!'),
(DEFAULT,4, 10, 'Impacta con un toque de sofisticación'),
(DEFAULT,5, 10, 'Son tan versátiles que puedo usarlos con todo!'),
(DEFAULT,1, 10, 'Definitivamente una excelente inversión en accesorios.');






