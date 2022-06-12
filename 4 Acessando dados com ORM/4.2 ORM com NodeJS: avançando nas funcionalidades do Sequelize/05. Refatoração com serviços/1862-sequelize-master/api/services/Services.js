// 05.02 Criando serviços
// 05.02.1
const database = require('../models')

class Services {
  constructor(nomeModelo) {
    this.nomeModelo = nomeModelo
  }

  async pegaTodosOsRegistros() {
    return database[this.nomeModelo].findAll()
  }

  // 05.03.1
  async pegaUmRegistro(id) {
    return database[this.nomeModelo].findOne({where: {id: Number(id)}})
  }

  async criaRegistro(dados) {

  }

  async atualizaRegistro(id, dadosAtualizado, transacao = {}) {
    return database[this.nomeModelo].update(dadosAtualizado, {where: {id: Number(id)}}, transacao)
  }

  async atualizaRegistros(where, dadosAtualizado, transacao = {}) {
    return database[this.nomeModelo].update(dadosAtualizado, {where: {...where}}, transacao)
  }

  async apagaRegistro(id) {

  }
  // 05.03.1
}

module.exports = Services
// 05.02.1