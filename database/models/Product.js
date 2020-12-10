module.exports = (sequelize,dataTypes) => {
    let alias = "Products";
    let cols = {
        id:{
            type:dataTypes.INTEGER(11),
            allowNull:false,
            autoIncrement: true,
            primaryKey:true
        },
        nombre:{
            type:dataTypes.STRING(95),
            allowNull:false
        },
       
        description:{
            type:dataTypes.STRING(1500),
            allowNull:false
        },
       
        imagen_portada:{
            type:dataTypes.STRING(75),
            allowNull:false
        },
        
        id_categoria:{
            type:dataTypes.INTEGER(11)
        },
       
        trailer:{
            type:dataTypes.STRING(100),
            allowNull:false
        },
        
        
        

    }

    let config = {
        tableName : "productos",
        timestamps: true,
        underscored: true
    }

    const Product = sequelize.define(alias,cols,config);

    return Product;

}