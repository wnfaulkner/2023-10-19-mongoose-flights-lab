const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  create
}

async function create(req, res) {
  
  const flight = await Flight.findById(req.params.id).populate('tickets')

  console.log('##################################################',flight)
  console.log('##################################################',flight.tickets)
  
  Ticket.push({
    seat: req.body.seat, 
    price: req.body.price, 
    flight: req.params.id,
  })
  
  try {
    await flight.save()
  } catch (err) {
    console.log(err)
  }
  
  res.redirect(`/flights/${flight._id}`)
}