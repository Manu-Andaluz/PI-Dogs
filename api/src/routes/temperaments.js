const { Router } = require('express');
const { Temperament } = require('../db');
const axios = require('axios')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const app = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

app.get('/', async (req, res) => {
    try {

        const apiUrl = await axios.get('https://api.thedogapi.com/v1/breeds')
        let allData = apiUrl.data.map(data => data.temperament).join('').split(', ')
        allData = [...new Set(allData)]; // eliminando elementos repetidos

        for (let item of allData) {
            await Temperament.findOrCreate({ where: { name: item } }) // encontrar o crear
        }

        const allTemperaments = await Temperament.findAll()

        res.send(allTemperaments)

    } catch (err) {
        res.status(400).send(err)
    }
})

module.exports = app;