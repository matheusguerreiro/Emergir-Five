const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

router
  .get('/pessoas', PessoaController.pegaTodasAsPessoas)
  .get('/pessoas/ativas', PessoaController.pegaPessoasAtivas)
  .get('/pessoas/:id', PessoaController.pegaUmaPessoa)
  .post('/pessoas', PessoaController.criaPessoa)
  .put('/pessoas/:id', PessoaController.atualizaPessoa)
  .delete('/pessoas/:id', PessoaController.apagaPessoa)
  .post('/pessoas/:id/restaura', PessoaController.restauraPessoa)
  /* 04.02.2 */.post('/pessoas/:id/cancela', PessoaController.cancelaPessoa)
  .get('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.pegaUmaMatricula)
  /* 03.03.2 */.get('/pessoas/:estudanteId/matricula', PessoaController.pegaMatriculas)
  /* 03.07.2 */.get('/pessoas/matricula/:turmaId/confirmadas', PessoaController.pegaMatriculasPorTurma)
  /* 03.08.2 */.get('/pessoas/matricula/lotada', PessoaController.pegaTurmasLotadas)
  .post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
  .put('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.atualizaMatricula)
  .delete('/pessoas/:estudanteId/matricula/:matriculaId',  PessoaController.apagaMatricula)
  .post('/pessoas/:estudanteId/matricula/:matriculaId/restaura', PessoaController.restauraMatricula)
module.exports = router