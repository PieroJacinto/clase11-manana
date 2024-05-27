const { Association } = require('sequelize');
const db = require('../database/models'); //Requerimos la conexión a la base de datos y todos los modelos.

const actorController = {
    actorDetail: function (req, res) {
        const id = req.params.id;

        db.Actor.findByPk(id, {
            include: [{ association: "movies" }]
        })
            .then(function (data) {
                if (data.favorite_movie_id) {
                    db.Movie.findByPk(data.favorite_movie_id)
                    .then(function (favMovie) {
                        data.favorite_movie = favMovie                        
                            return res.render("actor", { actor: data })
                        })
                } else {
                    return res.render("actor", { actor: data })
                }
            })
            .catch(function (e) {
                console.log(e);
            })


    }
}

module.exports = actorController