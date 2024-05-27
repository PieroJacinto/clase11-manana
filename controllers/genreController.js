const { Association } = require('sequelize');
const db = require('../database/models'); //Requerimos la conexión a la base de datos y todos los modelos.


const genreController = {
    genreDetail: function(req, res){
        // obtener el genero que nos llega y enviar todas las peliculas de ese genero
        const id = req.params.id;

        db.Genre.findByPk(id,{
            include: [{association: "movies"}]
        })
        .then( function(data){
            console.log("genre controller: ", JSON.stringify(data,null,4));
            return res.render("genre", {genre:data})
        })
        .catch(function(e){
            console.log(e);
        })
       
    },
}   

module.exports = genreController