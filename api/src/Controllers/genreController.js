const axios = require('axios')
const {Genre} = require('../db')

const getAllGenres = async () => {
    const apiInfo = await axios('https://api.rawg.io/api/genres?key=82c164b6500548358c739526939d2bf4')

    const info = apiInfo.data.results.map(el => el.name)
    info.forEach(el => {
        Genre.findOrCreate({
            where: {name: el}
        })
    })
    const allGenres = await Genre.findAll()

    return allGenres
}

module.exports = {
    getAllGenres
}