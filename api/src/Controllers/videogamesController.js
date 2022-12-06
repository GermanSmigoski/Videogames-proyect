const axios = require("axios");
const {Videogame, Genre} = require('../db')
const {API_KEY} = process.env

const getApiInfo = async () => {
let api = `https://api.rawg.io/api/games?key=82c164b6500548358c739526939d2bf4`
    let games = []
    for (let i = 0; i < 5; i++) {
            const result = await axios.get(api)
            result.data.results.map(e => {
                games.push({
                    id: e.id,
                    name: e.name,
                    image: e.background_image,
                    rating: e.rating,
                    platforms: e.platforms?.map(el => el.platform.name),
                    genres: e.genres?.map(el => el.name)
                })
            })
            api = result.data.next
        }
        return games}

const getDbVideogames = async () => {
  const db = await Videogame.findAll({
    include: {
      model: Genre,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
  let dato = JSON.parse(JSON.stringify(db,null,2))
  dato.forEach(el => el.genres = el.genres.map(el => el.name))
  return dato
};

const getAllGames = async () => {
  const apiInfo = await getApiInfo();
  const DbVideogames = await getDbVideogames();
  const allInfo = apiInfo.concat(DbVideogames);
  return allInfo;
};


const getGamesDetail = async (id) => {
  const apiInfo = await axios(`https://api.rawg.io/api/games/${id}?key=82c164b6500548358c739526939d2bf4`)
  if(id){
    const info = await apiInfo.data
    const results = {
      id: info.id,
      name: info.name,
      description: info.description_raw,
      released: info.released,
      rating: info.rating,
      image: info.background_image,
      platforms: info.parent_platforms.map(el=> el.platform.name),
      genres: info.genres.map(el=>el.name)
    }
    return results
  }
  }


module.exports = {
  getAllGames,
  getGamesDetail
};
