const axios = require('axios')
const { Breed, Temperament } = require('../db');

// Obteniendo info de la api
const getApiInfo = async () => {
    const apiUrl = await axios.get('https://api.thedogapi.com/v1/breeds')
    const apiInfo = await apiUrl.data.map(breed => {
        return {
            name: breed.name,
            id: breed.id,
            origin: breed.origin,
            weight: breed.weight.metric,
            height: breed.height.metric,
            yearsOfLife: breed.life_span,
            temperament: breed.temperament,
            image: breed.image.url
        }
    })

    return apiInfo
}

// Obteniendo info de la db
const getDataBaseInfo = async () => {
    const data = await Breed.findAll({
        include: {
            model: Temperament,
            attributes: ['name'],
            through: { attributes: [] }
        },
    })

    return data
}

// Obteniendo api e db info para unirlas
const getAllData = async () => {
    const apiInfo = await getApiInfo()
    const dataBaseInfo = await getDataBaseInfo()
    const allInfo = apiInfo.concat(dataBaseInfo)
    return allInfo
}

module.exports = { getApiInfo, getDataBaseInfo, getAllData }