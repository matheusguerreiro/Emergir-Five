// 05.03.2
const Services = require('./Services')
const database = require('../models')

class PessoasServices extends Services {
  constructor() {
    super('Pessoas')
    // 05.06 Passando parâmetros
    // 05.06.1
    this.matriculas = new Services('Matriculas')
  }

  async pegaRegistrosAtivos(where = {}) {
    return database[this.nomeModelo].findAll({where: {...where}})
  }

  async pegaTodosOsRegistros(where = {}) {
    return database[this.nomeModelo]
      .scope('todos')
      .findAll({where: {...where}})
  }

  async cancelaPessoaEMatriculas(estudanteId) {
    return database.sequelize.transaction(async transacao => {
      await super.atualizaRegistro({ativo: false}, estudanteId, {transaction: transacao})
      await this.matriculas.atualizaRegistros({status: 'cancelado'}, {estudante_id: estudanteId}, {transaction: transacao})
    })
  }
}

module.exports = PessoasServices
// 05.03.2