const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://admin:12345@desafionode.yrvsw.mongodb.net/desafio')

let db = mongoose.connection

module.exports = db