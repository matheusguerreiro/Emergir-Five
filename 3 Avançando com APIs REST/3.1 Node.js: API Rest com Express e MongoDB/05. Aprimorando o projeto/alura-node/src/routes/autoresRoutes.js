import express from 'express'
import AutorController from '../controllers/autoresController.js'
import LivroController from '../controllers/livrosController.js'

const router = express.Router()

router
  .get('/autores', AutorController.listarAutores)
  .get('/livros/busca', LivroController.listarLivroEditora)
  .get('/autores/:id', AutorController.listarAutorId)
  .post('/autores', AutorController.cadastrarAutor)
  .put('/autores/:id', AutorController.atualizarAutor)
  .delete('/autores/:id', AutorController.deletarAutor)

export default router