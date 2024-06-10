module.exports = function (sequelize, dataTypes ) {
    let alias = "Comentarios"; 
    let cols = { 
        id_comentario: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        id_usuario: {
            type : dataTypes.INTEGER
        },
        id_producto: {
            type : dataTypes.INTEGER
        },
        texto_comentarios: {
            type : dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt:{
            type: dataTypes.DATE
        },
        deletedAt:{
            type: dataTypes.DATE
        }
  	}

    let config = {
        tableName: "comentarios", 
        timestamps: true, 
        underscored: true 
    }
    
    let Comentarios = sequelize.define(alias, cols, config);

    // Aca va las relaciones
    Comentarios.associate = function (models) {
        Comentarios.belongsTo( models.Product, {
            as: 'product', // como voy a llamar a la reclacion en el controlador
            foreignKey: 'id_producto'
        }),
        Comentarios.belongsTo( models.Users, {
            as: 'users', // como voy a llamar a la reclacion en el controlador
            foreignKey: 'id_usuario'
        })
    }

    return Comentarios;
}
