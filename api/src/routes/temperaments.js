const { Router } = require('express');
const { Temperament } = require('../db');
const axios = require('axios')

const app = Router();

app.get('/', async (req, res) => {
    try {

        const apiUrl = await axios.get('https://api.thedogapi.com/v1/breeds')
        let allData = apiUrl.data.map(data => data.temperament).join('').split(', ')
        allData = [...new Set(allData)]; // removing repeat elements

        for (let item of allData) {
            await Temperament.findOrCreate({ where: { name: item } }) // entering temperaments into the database
        }

        const allTemperaments = await Temperament.findAll() // request all the temperaments in db

        res.send(allTemperaments)

    } catch (err) {
        res.status(400).send(err)
    }
})

module.exports = app;