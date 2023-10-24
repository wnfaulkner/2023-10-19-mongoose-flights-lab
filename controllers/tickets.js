const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
  create
}

async function create(req, res) {
  
  const flight = await Flight.findById(req.params.id)
 
  const newTicket = await Ticket.create({
    seat: req.body.seat, 
    price: req.body.price, 
    flight: req.params.id,
  })

  flight.tickets.push(newTicket)

  // console.log(flight)

  try {
    await flight.save()
    //res.send(flight)
    res.redirect(`/flights/${flight._id}`)
  } catch (err) {
    console.log(err)
  }
  
}