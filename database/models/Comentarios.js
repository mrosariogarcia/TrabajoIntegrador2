module.exports = function (sequelize, dataTypes ) {
    let alias = "Comentario"; 
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
        texto_comentario: {
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
        tableName: "comentario", 
        timestamps: true, 
        underscored: true 
    }
    
    let Comentario = sequelize.define(alias, cols, config);

    // Aca va las relaciones
    Comentario.associate = function (models) {
        Comentario.belongsTo( models.Product, {
            as: 'product', // como voy a llamar a la reclacion en el controlador
            foreignKey: 'id_producto'
        }),
        Comentario.belongsTo( models.Users, {
            as: 'users', // como voy a llamar a la reclacion en el controlador
            foreignKey: 'id_usuario'
        })
    }

    return Comentario;
}