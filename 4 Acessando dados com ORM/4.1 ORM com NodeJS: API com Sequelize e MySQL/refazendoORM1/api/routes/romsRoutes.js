const {Router} = require('express')
const RomsController = require('../controllers/RomsController')

const router = Router()

router.get('/roms', RomsController.readRoms)
router.get('/roms/:id', RomsController.readRom)
router.post('/roms', RomsController.createRom)
router.put('/roms/:id', RomsController.updateRom)
router.delete('/roms/:id', RomsController.deleteRom)

module.exports = router
