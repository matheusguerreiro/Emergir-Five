const express = require('express')

const markersRoutes = require('./markersRoutes')

const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).send({message: 'Markers'})
  })
  app.use(
    express.json(),
    markersRoutes
  )
}

module.exports = routes