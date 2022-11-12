const { Router } = require('express');
const dogsRouter = require('./dogs')
const temperamentsRouter = require('./temperaments')
const app = Router();
// Defining which file for each path
app.use('/dogs', dogsRouter)
app.use('/temperaments', temperamentsRouter)

module.exports = app;