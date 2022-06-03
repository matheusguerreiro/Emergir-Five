// 1.7 criando um servidor
const http = require('http')
const port = 3000

const rotas = {
  '/': 'curso de Node.js',
  '/livros': 'página de livros',
  '/autores': 'lista de autores',
  '/editora': 'editora',
  '/sobre': 'sobre'
}

const server = http.createServer((req, res) => {
  res.writeHead(200, {'content-type': 'text/plain'})
  res.end(rotas[req.url])
})

server.listen(port, () => {
  console.log(`servidor escutando em http://localhost:${port}`)
})