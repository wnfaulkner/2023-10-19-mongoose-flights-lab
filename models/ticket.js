const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ticketSchema = new Schema({
  seat: {type: String, match: /[A-F][1-9]{1}[0-9]?/},
  price: {type: Number, min: 0},
  flight: {type: Schema.Types.ObjectId, ref: 'Flight'}
})

module.experts = mongoose.model('Ticket', ticketSchema)