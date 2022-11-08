const { Router } = require('express');
const { Breed, Temperament } = require('../db');
const axios = require('axios')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const app = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
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

const getAllData = async () => {
    const apiInfo = await getApiInfo()
    const dataBaseInfo = await getDataBaseInfo()
    const allInfo = apiInfo.concat(dataBaseInfo)
    return allInfo
}

app.get('/dogs', async (req, res) => {
    const { name } = req.query

    try {
        const allData = await getAllData()
        if (name) {
            const breedNames = allData.filter(a => a.name.toLowerCase().includes(name.toLowerCase()))
            breedNames.length > 0
                ? res.send(breedNames)
                : res.status(404).send('No existe esa raza')
        } else {
            res.send(allData)
        }
    } catch (err) {
        res.status(400).send(err)
    }

})

app.get('/dogs/:breedId', async (req, res) => {
    const { breedId } = req.params

    try {

        const allData = await getAllData()
        const breed = await allData.find(data => data.id == breedId)

        breed ? res.send(breed) : res.send('not found')

    } catch (err) {
        res.status(400).send(err)
    }
})

app.get('/temperaments', async (req, res) => {
    try {

        const apiUrl = await axios.get('https://api.thedogapi.com/v1/breeds')
        let allData = apiUrl.data.map(data => data.temperament).join('').split(', ')
        allData = [...new Set(allData)];

        for (let item of allData) {
            await Temperament.findOrCreate({ where: { name: item } })
        }

        const allTemperaments = await Temperament.findAll()

        res.send(allTemperaments)

    } catch (err) {
        res.status(400).send(err)
    }
})

app.post('/', async (req, res) => {
    const { name, height, weight, yearsOfLife, temperament } = req.body

    try {

        const found = await getAllData().map(element => element.name === name)

        if (found.length > 0) return res.status(400).send('The breed is already exist')

        const newBread = await Breed.create({ name, height, weight, yearsOfLife })

        const newTemperament = await Temperament.findAll({ where: { name: temperament } })

        newBread.addTemperament(newTemperament)

        const created = await Breed.findAll({ where: { name: name } })

        if (created) {
            res.status(201).send('Breed created', created)
        } else {
            res.status(404).send('Something go wrong')
        }

    } catch (err) {
        res.status(400).send(err)
    }
})

/*
 GET /dogs?name="...":
Obtener un listado de las razas de perro que contengan la palabra ingresada como query parameter
Si no existe ninguna raza de perro mostrar un mensaje adecuado

 GET /dogs/{idRaza}:
Obtener el detalle de una raza de perro en particular
Debe traer solo los datos pedidos en la ruta de detalle de raza de perro
Incluir los temperamentos asociados

 POST /dogs:
Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
Crea una raza de perro en la base de datos relacionada con sus temperamentos

 GET /temperaments:
Obtener todos los temperamentos posibles
En una primera instancia deberán obtenerlos desde la API externa y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
*/


module.exports = app;
