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
(DEFAULT,1, 'Lapices','imagen_lapices.jpg', 'Un set de lápices de 12 colores variados, perfectos para dibujar.'),
(DEFAULT,2, 'Marcadores','imagen_marcadores.jpg', 'Un conjunto de marcadores de colores vivos, ideales para subrayar texto'),
(DEFAULT,3, 'Hojas', 'imagen_hojas.jpg','Un paquete de hojas blancas de alta calidad, adecuadas para escribir, imprimir y dibujar. Perfectas para proyectos escolares y de oficina.'),
(DEFAULT,4, 'Resaltadores', 'imagen_resaltadores.jpg', 'Un juego de resaltadores fluorescentes en varios colores, perfectos para destacar puntos clave en documentos, libros y apuntes.'),
(DEFAULT,5, 'Tijera','imagen_tijera.jpg',  'Un par de tijeras de acero inoxidable con mangos ergonómicos, ideales para recortar papel, cartulina y otros materiales con precisión y facilidad.'),
(DEFAULT,1, 'Caja de acuarelas','imagen_acuarelas.jpg', 'Una caja de acuarelas compacta y portátil, con un diseño ergonómico que la hace ideal para llevarla contigo y pintar en cualquier lugar.'),
(DEFAULT,2,'Marcador permanente','imagen_permanente.jpg','Muy buena calidad'),
(DEFAULT,3,'Voligoma','imagen_voligoma.jpg','Adhesivo sintético voligoma transparente x30 ml.'),
(DEFAULT,4,'Goma de borrar', 'imagen_gomadeborrar.jpg','Este producto de alta calidad, de color blanco y forma rectangular, viene en un pack de dos unidades, lo que garantiza que siempre tendrás una a mano.'),
(DEFAULT,5,'Lapiz negro','imagen_lapiznegro.jpg','El Lápiz Negro Noris Staedtler es la elección perfecta para aquellos que buscan calidad y precisión en su escritura o dibujo.');

-- Inserción de comentarios
INSERT INTO comentarios (id_comentario,id_usuario,id_producto, comentarios)
VALUES 
(DEFAULT,1, 1, 'La variedad de colores es perfecta para mis proyectos de arte'),
(DEFAULT,2, 1, 'El trazo es suave y preciso. Definitivamente los recomendaría'),
(DEFAULT,3, 1, 'Gran calidad'),
(DEFAULT,4, 2, 'Punta gorda, ideal para ninos'),
(DEFAULT,5, 2, 'Variedad de colores, un exito'),
(DEFAULT,1, 2, 'Ideal precio-calidad'),
(DEFAULT,2, 3, 'Ideal precio-calidad'),
(DEFAULT,3, 3, 'Me gustaria que vengan mas hojas'),
(DEFAULT,4, 3, 'Se me rompen los aujeros rapidamente'),
(DEFAULT,5, 4, 'Producto basico de la cartuchera, gran adquisicion '),
(DEFAULT,1, 4, 'Buenos colores'),
(DEFAULT,2, 4, 'Gran durabilidad'),
(DEFAULT,3, 5, 'Buen filo'),
(DEFAULT,4, 5, 'Se lo recomiendo para ninos mayores de 10 anos'),
(DEFAULT,1, 5, 'Colores varios'),
(DEFAULT,2, 6, 'Gran paleta de colores'),
(DEFAULT,3, 6, 'Ideal para la escuela'),
(DEFAULT,4, 6, 'Precio-calidad, super recomendado'),
(DEFAULT,5, 7, 'Gran durabilidad'),
(DEFAULT,1, 7, 'muy caro'),
(DEFAULT,2, 7, 'Si bien es caro, lo tengo hace 2 anos y no se me seco,un exito la compra'),
(DEFAULT,3, 8, 'Gran adhesivo'),
(DEFAULT,4, 8, 'Funciona muy bien'),
(DEFAULT,5, 8, 'Gran calidad'),
(DEFAULT,1, 9, 'Funciona tambien para lapices de colores'),
(DEFAULT,2, 9, 'Buena calidad'),
(DEFAULT,3, 9, 'Borra tinta tambien!'),
(DEFAULT,4, 10, 'Muy buena punta'),
(DEFAULT,5, 10, 'Lo recomiendo para iniciar las clases'),
(DEFAULT,1, 10, 'Un exito, lo usan todos mis hijos!');







