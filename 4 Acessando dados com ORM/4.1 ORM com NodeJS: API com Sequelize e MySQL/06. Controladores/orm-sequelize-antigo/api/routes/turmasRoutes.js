const {Router} = require('express')
const TurmaController = require('../controllers/TurmaController')

const router = Router()

router.get('/turmas', TurmaController.pegaTurmas)
router.get('/turmas/:id', TurmaController.pegaTurmaId)
router.post('/turmas', TurmaController.criaTurma)
router.put('/turmas/:id', TurmaController.atualizaTurma)
router.delete('/turmas/:id', TurmaController.deletaTurma)

module.exports = router