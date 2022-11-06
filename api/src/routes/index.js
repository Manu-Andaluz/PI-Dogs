const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const app = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

app.get('/home', (req, res) => {
    res.send('hola')
    console.log('hola')
})


module.exports = app;
