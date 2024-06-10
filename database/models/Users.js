module.exports = function (sequelize, dataTypes) {
    // Definir un alias.
    let alias = 'User'; // Con este alias Sequelize va a poder identificar internamente al archivo de modelo.
    // Describir la configuracion de las columnas de la tabla
    let cols = {
        id_usuario: {
            autoincrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        email: {
            type: dataTypes.STRING,
        },
        contrasena: {
            type: dataTypes.STRING,
        },
        fecha: {
            type: dataTypes.DATE,
        },
        dni: {
            type: dataTypes.INTEGER,
        },
        fotoPerfil: {
            type: dataTypes.STRING
        }
    }
    let config = {
        table: 'usuario',
        timestamps: true,
        underscore: true, // Si los nombres de las columna en la db tienen guiones bajos en el lugar de camelCase.
    }
    const User = sequelize.define(alias, cols, config);
    
User.associate = function (models) {
    User.hasMany(models.Product, {
        as: 'productos', //Como voy a llamar a la relación dentro del controlador
        foreignKey: 'id_usuario'
    })
    User.hasMany(models.Comentario, {
        as: 'comentarios',
        foreignKey: 'id_usuario'
    })
}

return User;
}
