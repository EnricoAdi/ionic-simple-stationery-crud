const mongoose = require("mongoose")

const StationerySchema = new mongoose.Schema({
  name: String,
  qty: {
    type: Number,
    min: [1, 'Minimum value of quantity is 1']
  },
  price: {
    type: Number,
    min: [1, 'Price must be greater than 0']
  },
  type: {
    type: String,
    enum: ['book', 'pencil']
  }
})

const Stationery = mongoose.model('Stationery', StationerySchema)
module.exports = Stationery