const axios = require('axios')
const { Breed, Temperament } = require('../db');

// Getting info from the api
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
            temperaments: breed.temperament,
            image: breed.image.url
        }
    })

    return apiInfo
}

// Getting info from the Data Base
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

// Getting info from the api and fron the Data Base
const getAllData = async () => {
    const apiInfo = await getApiInfo()
    const dataBaseInfo = await getDataBaseInfo()
    const allInfo = apiInfo.concat(dataBaseInfo)
    return allInfo
}

const sortByTemperament = async (temperName) => {
    let apiInfo = await getApiInfo()
    let dataBaseInfo = await getDataBaseInfo()

    apiInfo = await apiInfo.map(e => {
        if (e.temperaments) {
            const find = e.temperaments.split(', ').find(e => e.toLowerCase() === temperName.toLowerCase())
            if (find) {
                return e
            }
        }
    }).filter(e => e)

    dataBaseInfo = await dataBaseInfo.map(e => {
        if (e.temperaments.length > 0) {
            const find = e.temperaments.find(e => e.name.toLowerCase() === temperName.toLowerCase())
            if (find) {
                return e
            }
        }
    }).filter(e => e)

    const allInfo = apiInfo.concat(dataBaseInfo)
    return allInfo
}

const sortByWeight = async () => {
    let allData = await getAllData()
    allData = allData.sort((a, b) => a.weight.split(' - ').reduce((a, b) => Number(a) + Number(b)) - b.weight.split(' - ').reduce((a, b) => Number(a) + Number(b)))
    return allData
}

module.exports = { getApiInfo, getDataBaseInfo, getAllData, sortByTemperament, sortByWeight }