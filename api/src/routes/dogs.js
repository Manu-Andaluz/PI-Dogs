const { Router } = require('express');
const { Breed, Temperament } = require('../db');
const { getAllData } = require('../controllers/controllers')

const app = Router();

app.get('/', async (req, res) => {
    const { name } = req.query

    try {
        const allData = await getAllData()
        if (name) {
            const breedNames = allData.filter(a => a.name.toLowerCase().includes(name.toLowerCase())) // me traigo todo lo que coincida
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

app.get('/:breedId', async (req, res) => {
    const { breedId } = req.params

    try {

        const allData = await getAllData()
        const breed = await allData.find(data => data.id == breedId)

        breed ? res.send(breed) : res.send('not found')

    } catch (err) {
        res.status(400).send(err)
    }
})

app.post('/', async (req, res) => {
    const { name, minHeight, maxHeight, minWeight, maxWeight, minYearsLife, maxYearsLife, temperament, origin, image } = req.body

    try {

        const allData = await getAllData()
        const found = allData.find(e => e.name.toLowerCase() === name.toLowerCase()) // lowerCase para poder verificar si coinciden
        if (found) { // checkeando si existe
            return res.status(400).send('The breed already exist')
        }

        const newBread = await Breed.create({
            name: name[0].toUpperCase() + name.slice(1),
            height: `${minHeight} - ${maxHeight}`,
            weight: `${minWeight} - ${maxWeight}`,
            yearsOfLife: `${minYearsLife} - ${maxYearsLife}`,
            origin: origin ? origin : null,
            image: image ? image : null
        })

        await temperament.split(' ').forEach(async element => {
            const newTemperament = await Temperament.findAll({ where: { name: element } })
            await newBread.addTemperament(newTemperament)
        })

        res.status(201).send('Breed created')

    } catch (err) {
        res.status(400).send(err)
    }
})

app.delete('/delete/:id', async function (req, res) {
    const { id } = req.params
    try {
        const removeBreed = await Breed.findByPk(id)

        if (removeBreed) {
            await removeBreed.destroy()
            res.send('Breed Removed')
        } else {
            res.statuts(404).send('Wrong Id')
        }
    } catch (err) {
        res.status(400).send(err)
    }
})

// 
//  GET /dogs?name="...":
// Obtener un listado de las razas de perro que contengan la palabra ingresada como query parameter
// Si no existe ninguna raza de perro mostrar un mensaje adecuado

//  GET /dogs/{idRaza}:
// Obtener el detalle de una raza de perro en particular
// Debe traer solo los datos pedidos en la ruta de detalle de raza de perro
// Incluir los temperamentos asociados

//  POST /dogs:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de raza de perro por body
// Crea una raza de perro en la base de datos relacionada con sus temperamentos

//  GET /temperaments:
// Obtener todos los temperamentos posibles
// En una primera instancia deberán obtenerlos desde la API externa y guardarlos en su propia base de datos y luego ya utilizarlos desde allí
// 


module.exports = app;
