const express = require('express')
const markersController = require('../controllers/markersController')

const router = express.Router()

router
  .get('/markers', markersController.listMarkers)
  .post('/markers', markersController.createMarker)
  .get('/markers/:id', markersController.listMarker)
  .put('/markers/:id', markersController.updateMarker)
  .delete('/markers/:id', markersController.deleteMarker)
  .delete('/markers', markersController.deleteMarkers)
module.exports = router