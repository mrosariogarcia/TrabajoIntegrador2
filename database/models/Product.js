module.exports = function(sequelize, dataTypes){
    let alias = "Product";
    let cols ={

        id_producto: {
            primaryKey: true,
            autoIncrement: true,
            type: dataTypes.INTEGER
        },

        id_usuario:{
            type: dataTypes.INTEGER
        },

        producto:{
            type: dataTypes.STRING
        },

        imagen:{
            type: dataTypes.STRING
        },

        descripcion:{
            type: dataTypes.STRING
        },

        createdAt:{
            type: dataTypes.DATE
        }, 

        updatedAt:{
            type: dataTypes.DATE
        },

        deletedAt:{
            type:dataTypes.DATE
        },

    };

    let config = {
        tableName: "productos",
        timestamps: true,
        underscore: true,
    }

    let Product = sequelize.define(alias, cols, config);

    Product.associate = function(models){
        
        Product.belongsTo(models.User, {
            foreignKey: "id_usuario",
            as: "usuario",
        })

        Product.hasMany(models.Comentario, {
            foreignKey: "id_producto",
            as: "comentario",
        })
    }

    return Product;
}
