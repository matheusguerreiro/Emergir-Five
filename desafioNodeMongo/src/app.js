const express = require('express')
const db = require('./config/dbConnect')
const routes = require('./routes/index')

db.on('error', console.log.bind(console, 'Erro de conexão'))
db.once('open', () => {
  console.log('conexão feita com Sucesso')
})

const app = express()
app.use(express.json())
routes(app)

module.exports = app