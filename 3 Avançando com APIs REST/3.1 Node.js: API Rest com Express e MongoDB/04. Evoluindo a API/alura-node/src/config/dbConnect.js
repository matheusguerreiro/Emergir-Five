import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://cp:12@cp.0wdzo.mongodb.net/cp-node')

const db = mongoose.connection

export default db