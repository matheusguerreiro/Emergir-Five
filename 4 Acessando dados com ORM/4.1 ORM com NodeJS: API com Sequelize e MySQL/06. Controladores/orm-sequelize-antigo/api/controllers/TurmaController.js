const database = require('../models')

class TurmaController {
  static async pegaTurmas(req, res) {
    try {
      const turmas = await database.Turmas.findAll()
      return res.status(200).json(turmas)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
  static async pegaTurmaId(req, res) {
    const {id} = req.params
    try {
      const turma = await database.Turmas.findOne({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json(turma)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
  static async criaTurma(req, res) {
    const turma = req.body
    try {
      const novaTurma = await database.Turmas.create(turma)
      return res.status(200).json(novaTurma)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
  static async atualizaTurma(req, res) {
    const {id} = req.params
    const novosDados = req.body
    try {
      await database.Turmas.update(novosDados, {where: {id: Number(id)}})
      const turmaAtualizada = await database.Turmas.findOne({where: {id: Number(id)}})
      return res.status(200).json(turmaAtualizada)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
  static async deletaTurma(req, res) {
    const {id} = req.params
    try {
      await database.Turmas.destroy({where: {id: Number(id)}})
      res.status(200).json({message: `id: ${id} Deletado com Sucesso!`})
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
}

module.exports = TurmaController