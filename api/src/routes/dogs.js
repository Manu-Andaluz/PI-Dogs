const { Router } = require('express');
const { Breed, Temperament } = require('../db');
const { getApiInfo, getDataBaseInfo, getAllData, sortByTemperament, sortByWeight } = require('../controllers/controllers')

const app = Router();

app.get('/', async (req, res) => {
    const { name } = req.query

    try {
        const allData = await getAllData() // data from api and db
        if (name) {
            const breedNames = allData.filter(a => a.name.toLowerCase().includes(name.toLowerCase())) // I bring everything that matches
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

app.get('/filter/:filterBy', async (req, res) => {
    const { filterBy } = req.params
    const { temperName } = req.query
    try {
        switch (filterBy) {
            case 'alfabetic-A-Z': {
                const allData = await getAllData()
                return res.send(allData.sort((a, b) => a.name.localeCompare(b.name)))
            }

            case 'alfabetic-Z-A': {
                const allData = await getAllData()
                return res.send(allData.sort((a, b) => b.name.localeCompare(a.name)))
            }

            case 'temperaments': {
                return res.send(await sortByTemperament(temperName))
            }

            case 'breedsApi': {
                const dbData = await getApiInfo()
                return res.send(dbData)
            }

            case 'breedsDB': {
                const apiData = await getDataBaseInfo()
                return res.send(apiData)
            }

            case 'lessWeight': {
                const allData = await sortByWeight()
                return res.send(allData)
            }

            case 'moreWeight': {
                const allData = await sortByWeight()
                return res.send(allData.reverse())
            }

            default: {
                return res.send('nothing')
            }
        }

    } catch (err) {
        res.send(err)
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
    const { name, minHeight, maxHeight, minWeight, maxWeight, minYearsLife, maxYearsLife, temperaments, origin, image } = req.body

    try {

        if (!name || !minHeight || !maxHeight || !minWeight || !maxWeight || !temperaments) {
            return res.status(404).send('Missing data')
        }

        // checking if the breed already exists
        const allData = await getAllData()
        const found = allData.find(e => e.name.toLowerCase() === name.toLowerCase())
        if (found) {
            return res.status(400).send('The breed already exist')
        }
        // else
        const newBread = await Breed.create({
            name: name[0].toUpperCase() + name.slice(1),
            height: `${minHeight} - ${maxHeight}`,
            weight: `${minWeight} - ${maxWeight}`,
            yearsOfLife: minYearsLife && maxYearsLife ? `${minYearsLife} - ${maxYearsLife}` : null,
            origin: origin ? origin : null,
            image: image ? image : null
        })

        await temperaments.split(' ').forEach(async element => { // associating temperaments
            const newTemperament = await Temperament.findAll({ where: { name: element } })
            await newBread.addTemperament(newTemperament)
        })

        res.status(201).send('Breed created !!')

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

module.exports = app;
