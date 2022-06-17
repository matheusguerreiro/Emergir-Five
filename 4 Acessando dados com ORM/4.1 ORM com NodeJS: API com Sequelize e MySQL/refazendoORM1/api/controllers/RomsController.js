const db = require('../models')

class RomsController {
  static async readRoms(req, res) {
    try {
      const roms = await db.Roms.findAll()
      return res.status(200).json(roms)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
  static async readRom(req, res) {
    const {id} = req.params
    try {
      const rom = await db.Roms.findOne({where: {id: id}})
      return res.status(200).json(rom)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
  static async createRom(req, res) {
    const data = req.body
    try {
      const rom = await db.Roms.create(data)
      return res.status(200).json(rom)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
  static async updateRom(req, res) {
    const {id} = req.params
    let data = req.body
    try {
      await db.Roms.update(data, {where: {id: id}})
      const romUpdate = await db.Roms.findOne({where: {id: id}})
      return res.status(200).json(romUpdate)
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
  static async deleteRom(req, res) {
    const {id} = req.params
    try {
      await db.Roms.destroy({where: {id: id}})
      return res.status(200).json({message: `rom id: ${id} deletada com sucesso!`})
    } catch (error) {
      res.status(500).json(error.message)
    }
  }
}

module.exports = RomsController