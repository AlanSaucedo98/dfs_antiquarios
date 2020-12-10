const db = require('../database/models'); //requiero La base de datos mysql

const {
    Op
} = require("sequelize");


module.exports = { //exporto un objeto literal con todos los metodos
    index: function (req, res) {




        db.Products.findAll()
            .then(resultAll => {

                //res.send(resultAll)//Envio todos los productos de la base de datos 

                res.render('index', { //renderizo en el navegador la vista index que contiene el HOME del sitio
                    //envío el objeto literal con la o las variables necesarias para renderizar de forma correcta el home                
                    todos: resultAll,
                })
                

            })
            .catch(error => {
                console.log(error)
            })


    }


}