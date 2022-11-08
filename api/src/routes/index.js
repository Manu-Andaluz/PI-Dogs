const { Router } = require('express');
const dogsRouter = require('./dogs')
const temperamentsRouter = require('./temperaments')
const app = Router();
// Definiendo que archivo debe consultar para cada ruta
app.use('/dogs', dogsRouter)
app.use('/temperaments', temperamentsRouter)

module.exports = app;