const express = require('express');
const mongoose = require("mongoose");
const nodemailer = require("nodemailer")

const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.static('public'))

app.use(

    express.urlencoded({
        extended: true

    })
)
app.use(express.json())

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth:{
        user: "",
        pass: "",
    }
    })
    
module.exports = {transporter }



//rota da API
const pontoRoutes = require('../routes/routes.js')
const feriasRoutes = require('../routes/ferias.routes.js')
const RoutesHTML = require('../routes/html.routes.js')

app.use('/justPonto', pontoRoutes)
app.use('/justFerias', feriasRoutes)
app.use('/html', RoutesHTML)


//rota inicial
app.get('/', (req, res) => {

    res.json({ message: 'Oi express!' })

})


const username = "";
const password = encodeURIComponent("");
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
