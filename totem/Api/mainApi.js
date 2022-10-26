const express = require('express');
const mongoose = require("mongoose");
const nodemailer = require("nodemailer")

const app = express()
const cors = require('cors')

app.use(cors())

app.use(

    express.urlencoded({
        extended: true

    })
)
app.use(express.json())

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth:{
        user: "testeluwroblewski@gmail.com",
        pass: "jdojzlkhzanwrpuh",
    }
    })
    
module.exports = {transporter }



//rota da API
const pontoRoutes = require('../routes.js')
const feriasRoutes = require('../ferias.routes.js')

app.use('/justPonto', pontoRoutes)
app.use('/justFerias', feriasRoutes)


//rota inicial
app.get('/', (req, res) => {

    res.json({ message: 'Oi express!' })

})


const username = "teste";
const password = encodeURIComponent("teste123");
const cluster = "cluster0.1ylmc4y";
const dbname = "ja";

mongoose.connect(
    `mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`
)


    .then(() => {
        console.log("conectado")
        app.listen(3000)
    })
    .catch((err) => console.log(err))
