const http = require('http')
const port = 3000

const routes = {
  '/': 'HOME',
  '/emuladores': 'EMULADORES',
  '/roms': 'ROMS',
  '/historia': 'HISTORIA'
}

const server = http.createServer((req, res) => {
  res.writeHead(200, {'content-type': 'text/plain'})
  res.end(routes[req.url])
})

server.listen(port, () => {
  console.log(`estamos na porta http://localhost:${port}`)
})