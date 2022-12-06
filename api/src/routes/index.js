const { Router } = require("express");
const { Videogame, Genre } = require("../db");
const {
  getAllGames,
  getGamesDetail,
} = require("../Controllers/videogamesController");
const { getAllGenres } = require("../Controllers/genreController");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/videogames", async (req, res) => {
  const name = req.query.name;
  const allVideogames = await getAllGames();
  if (name) {
    let videogameFiltered = allVideogames.filter((el) =>
      el.name.toLowerCase().includes(name.toLowerCase())
    );
    videogameFiltered
      ? res.status(200).send(videogameFiltered)
      : res.status(404).send("Videogame not found");
  } else {
    res.status(202).send(allVideogames);
  }
});

router.get("/videogame/:id", async (req, res) => {
  const { id } = req.params;
  try{

    if (!Number(id)) {
      let idGame = await Videogame.findOne({
        where: { id },
        include: {
          model: Genre,
          attributes: ["name"],
          through: { attributes: [] },
        },
      });
      return res.status(200).send(idGame)
    }
    let apiGameId = await getGamesDetail(id)
    return res.status(200).send(apiGameId)
  } catch(e){
    console.log(e)
    res.status(404).send('Game not found')
  }

});

router.get("/genres", async (req, res) => {
  try {
    const genres = await getAllGenres();
    res.status(200).send(genres);
  } catch (error) {
    res.status(404).send({ error: "Genres not found" });
  }
});

router.post("/videogames", async (req, res) => {
  let { name, description, released, rating, image, platforms, genres } =
    req.body;

  let videogameCreated = await Videogame.create({
    name,
    description,
    released,
    rating,
    platforms,
    image,
  });

  let dbGenres = await Genre.findAll({
    where: { name: genres },
  });

  videogameCreated.addGenre(dbGenres);

  res.status(200).send(videogameCreated);
});

module.exports = router;
