const mongoose = require('mongoose')

const Funcionario = mongoose.model('Funcionario', {
    name: String,
    cpf: Number,
    rg: Number,
    datadeNascimento: String,
    cargo: String,
    sexo: String,
    approved: Boolean,
})

module.exports = Funcionario