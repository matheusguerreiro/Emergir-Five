const bodyParser = require('body-parser')
const romsRoutes = require('./romsRoutes')

module.exports = (app) => {
  app.use(bodyParser.json())
  app.use(romsRoutes)
}