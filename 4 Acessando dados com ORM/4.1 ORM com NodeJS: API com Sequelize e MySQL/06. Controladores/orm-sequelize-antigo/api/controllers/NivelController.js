const database = require('../models')

class NivelController {
  static async pegaNiveis(req, res) {
    try {
      const niveis = await database.Niveis.findAll()
      return res.status(200).json(niveis)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
  static async pegaNivel(req, res) {
    const {id} = req.params
    try {
      const nivel = await database.Niveis.findOne({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json(nivel)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
  static async criaNivel(req, res) {
    const nivel = req.body
    try {
      const novoNivel = await database.Niveis.create(nivel)
      return res.status(200).json(novoNivel)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
  static async atualizaNivel(req, res) {
    const {id} = req.params
    const novosDados = req.body
    try {
      await database.Niveis.update(novosDados, {where: {id: Number(id)}})
      const nivelAtualizado = await database.Niveis.findOne({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json(nivelAtualizado)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
  static async deletaNivel(req, res) {
    const {id} = req.params
    try {
      await database.Niveis.destroy({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json({message: `id: ${id} Deletado com Sucesso!`})
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
}

module.exports = NivelController