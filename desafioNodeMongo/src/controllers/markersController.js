const markers = require('../models/Marker')

class MarcadorController {
  static listMarkers = (req, res) => {
    markers.find((error, markers) => {
      if (error) {
        res.status(500).json(error.message)
      } else {
        res.status(200).json(markers)
      }
    })
  }
  static createMarker = (req, res) => {
    const marker = new markers(req.body)
    marker.save((error) => {
      if (error) {
        res.status(500).json({message: 'Erro ao criar Marker!'})
      } else {
        res.status(201).json(marker.toJSON())
      }
    })
  }
  static listMarker = (req, res) => {
    const {id} = req.params
    markers.findById(id, (error, marker) => {
      if (error) {
        res.status(404).json({message: `Marker id: ${id} não encontrado!`})
      } else {
        res.status(200).json(marker)
      }
    })
  }
  static updateMarker = (req, res) => {
    const {id} = req.params
    markers.findByIdAndUpdate(id, {$set: req.body}, (error) => {
      if (error) {
        res.status(500).json({message: `Erro ao atualizar Marker id: ${id}`})
      } else {
        res.status(200).json({message: `Marker id: ${id} atualizado com Sucesso!`})
      }
    })
  }
  static deleteMarker = (req, res) => {
    const {id} = req.params
    markers.findByIdAndDelete(id, (error) => {
      if (error) {
        res.status(500).json(error.message)
      } else {
        res.status(200).json({message: `Marker id: ${id} apagado com Sucesso!`})
      }
    })
  }
  static deleteMarkers = (req, res) => {
    markers.deleteMany({}, (error) => {
      if (error) {
        res.status(500).json(error.message)
      } else {
        res.status(200).json({message: 'Markers apagados com Sucesso!'})
      }
    })
  }
}

module.exports = MarcadorController