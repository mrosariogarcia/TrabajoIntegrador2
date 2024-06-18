module.exports = function (sequelize, dataTypes) {
    // Definir un alias.
    let alias = 'User'; // Con este alias Sequelize va a poder identificar internamente al archivo de modelo.
    // Describir la configuracion de las columnas de la tabla
    let cols = {
        id_usuario: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
    
        email: {
            type: dataTypes.STRING,
            unique: true,
        },

        usuario:{
            type: dataTypes.STRING,
        },

        contrasena: {
            type: dataTypes.STRING,
        },
        
        fechaDeNacimiento: {
            type: dataTypes.DATE,
        },
        
        dni: {
            type: dataTypes.INTEGER,
        },
        fotoDePerfil: {
            type: dataTypes.STRING
        },
        createdAt: {
            type : dataTypes.DATE
        },
        updatedAt: {
            type : dataTypes.DATE
        },
        deletedAt: {
            type : dataTypes.DATE
        }
  	}
    let config = {
        tableName: 'usuario',
        timestamps: true,
        underscored: false, // Si los nombres de las columna en la db tienen guiones bajos en el lugar de camelCase.
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
