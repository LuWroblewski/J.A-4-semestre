const express = require('express');
const mongoose = require("mongoose");


const app = express()
const cors = require('cors')

app.use(cors())

app.use(

    express.urlencoded({
        extended: true

    })
)
app.use(express.json())





//rota da API
const pontoRoutes = require('../routes/ponto.routes.js')
const feriasRoutes = require('../routes/ferias.routes.js')

app.use('/justPonto', pontoRoutes)
app.use('/justFerias', feriasRoutes)


//rota inicial
app.get('/', (req, res) => {

    res.json({ message: 'Oi express!' })

})


const username = "";
const password = "";
const cluster = "";
const dbname = "";

mongoose.connect(
    `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`
)


    .then(() => {
        console.log("conectado")
        app.listen(3000)
    })
    .catch((err) => console.log(err))