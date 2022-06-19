const mongoose = require('mongoose')
const {Schema} = require('mongoose')


const markerSchema = new Schema(
  {
    position: {
      lat: {type: Number, required: true},
      lng: {type: Number, required: true}
    },
    date: {
      type: String,
      default: new Date()
    },
    draggable: {
      type: Boolean,
      default: false
    }
  },
  {
    versionKey: false
    /*
    timestamps: true
    */
  }
    
)

const markers = mongoose.model('markers', markerSchema)

module.exports = markers