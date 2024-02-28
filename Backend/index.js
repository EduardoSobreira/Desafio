const express = require('express')
const mongoose = require('mongoose')
const app = express()
const cors = require('cors');

const Person = require('./models/person/Funcionario')
const Funcionario = require("./models/person/Funcionario");


app.use(
    express.urlencoded({
        extended: true,
    })
)


app.use(cors());

app.use(express.json())

const FuncionarioRoutes = require('./models/routes/FuncionarioRoutes')

app.use('/funcionario', FuncionarioRoutes)


mongoose.connect('mongodb+srv://eduardosobreira133:Ehox7xpTM4LzpJd7@cluster0.qhc66i8.mongodb.net/')
    .then(() => {
        console.log('Conectamos ao mongodb')
        app.listen(3000)
    })


//Ehox7xpTM4LzpJd7
//IP Access List
// Description
// 170.83.162.72/32
// My IP Address
//mongodb+srv://eduardosobreira133:Ehox7xpTM4LzpJd7@cluster0.qhc66i8.mongodb.net/
