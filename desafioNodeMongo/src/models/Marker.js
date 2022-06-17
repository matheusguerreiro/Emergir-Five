const mongoose = require('mongoose')
const {Schema} = require('mongoose')

let date = new Date()

const markerSchema = new Schema(
  {
    position: {
      lat: {type: Number, required: true},
      lng: {type: Number, required: true}
    },
    date: {
      type: Date,
      default: Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), 0)
    },
    draggable: {
      type: Boolean,
      default: false
    }
  },
  {versionKey: false}
)

const markers = mongoose.model('markers', markerSchema)

module.exports = markers