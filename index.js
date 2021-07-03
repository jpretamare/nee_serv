const express = require('express')
const app = express();
const peli = require('./routes/pelicula')
const ser = require('./routes/serie')
const cors = require('cors')

app.use(cors())
app.use(express.json())

app.use('/pelicula', peli )
app.use('/serie', ser)

app.get('/', (req, res) => {
    res.status(200).json({
        message: 'todo esta ok'   
    });
});

app.get('*', (req, res) => {
    res.status(404).end()
    console.log('pasamos errores de dir')
})

app.listen((3000 , (error) => {
    return error ? console.log(`Error: ${error}`) : console.log(`escuchando 3000`)
}));

