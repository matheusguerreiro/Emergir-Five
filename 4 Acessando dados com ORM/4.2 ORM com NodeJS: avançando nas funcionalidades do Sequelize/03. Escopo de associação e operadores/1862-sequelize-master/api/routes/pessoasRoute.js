const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router
  .get('/pessoas', PessoaController.pegaPessoasAtivas)
  .get('/pessoas/todos', PessoaController.pegaTodasAsPessoas)
  .get('/pessoas/:id', PessoaController.pegaUmaPessoa)
  .post('/pessoas', PessoaController.criaPessoa)
  .put('/pessoas/:id', PessoaController.atualizaPessoa)
  .delete('/pessoas/:id', PessoaController.apagaPessoa)
  .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
  .get('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.pegaUmaMatricula)
  /* 03.2 */.get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas)
  /* 07.2 */.get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.pegaMatriculasPorTurma)
  /* 08.2 */.get('/pessoas/matricula/lotada', PessoaController.pegaTurmasLotadas)
  .post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
  .put('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.atualizaMatricula)
  .delete('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.apagaMatricula)
  .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula)
module.exports = router