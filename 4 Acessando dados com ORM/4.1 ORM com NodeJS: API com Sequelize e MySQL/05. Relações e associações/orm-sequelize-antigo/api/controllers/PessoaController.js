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
  static async pegaPessoaId(req, res) {
    // const id = req.params.id OU
    const {id} = req.params
    try {
      const pessoa = await database.Pessoas.findOne({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json(pessoa)
    } catch (error) {
      res.status(400).json(error.message)
    }
  }
  static async criaPessoa(req, res) {
    const pessoa = req.body
    try {
      const pessoaCriada = await database.Pessoas.create(pessoa)
      return res.status(200).json(pessoaCriada)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
  static async atualizaPessoa(req, res) {
    const {id} = req.params
    const newValues = req.body // aqui pega on novos valores(dados) que serão enviados pelo corpo da requisição para serem atualizados
    try {
      await database.Pessoas.update(newValues, {where: {id: Number(id)}})
      const pessoaAtualizada = await database.Pessoas.findOne({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json(pessoaAtualizada)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
  static async deletaPessoa(req, res) {
    const {id} = req.params
    try {
      await database.Pessoas.destroy({
        where: {
          id: Number(id)
        }
      })
      return res.status(200).json({message: 'Pessoa Deletada com Sucesso!'})
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
}

module.exports = PessoaController