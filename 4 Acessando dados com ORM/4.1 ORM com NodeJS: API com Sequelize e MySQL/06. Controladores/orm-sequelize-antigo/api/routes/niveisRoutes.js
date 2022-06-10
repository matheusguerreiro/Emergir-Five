const {Router} = require('express')
const NivelController = require('../controllers/NivelController')

const router = Router()

router.get('/niveis', NivelController.pegaNiveis)
router.get('/niveis/:id', NivelController.pegaNivel)
router.post('/niveis', NivelController.criaNivel)
router.put('/niveis/:id', NivelController.atualizaNivel)
router.delete('/niveis/:id', NivelController.deletaNivel)

module.exports = router