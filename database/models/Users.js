module.exports = function (sequelize, dataTypes) {
    // Definir un alias.
    let alias = 'Users'; // Con este alias Sequelize va a poder identificar internamente al archivo de modelo.
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
    const Users = sequelize.define(alias, cols, config);
    
Users.associate = function (models) {
    Users.hasMany(models.Product, {
        as: 'productos', //Como voy a llamar a la relación dentro del controlador
        foreignKey: 'id_usuario'
    })
    Users.hasMany(models.Comentarios, {
        as: 'comentarios',
        foreignKey: 'id_usuario'
    })
}

return Users;
}
