const Flight = require('../models/flight');

module.exports = {
  create
}

async function create(req, res) {
  const flight = await Flight.findById(req.params.id).populate('destinations')
  
  flight.destinations.push({
    destinationAirport: req.body.destination, 
    arrivalDate: req.body.arrivalDate
  })
  
  try {
    await flight.save()
  } catch (err) {
    console.log(err)
  }
  
  res.redirect(`/flights/${flight._id}`)
}