const database = require('../models')

class PessoaController {
  static async pegaPessoas(req, res) {
    try {
      const pessoas = await database.Pessoas.findAll()
      return res.status(200).json(pessoas)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
}

module.exports = PessoaController