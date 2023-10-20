const Flight = require('../models/flight')

module.exports = {
  index, 
  new: newFlight
}

//functions

//INDEX
async function index(req, res) {
  const allFlights = await Flight.find({})
  res.render('flights/index',
    {
      title: 'All Flights',
      flights: allFlights
    }
  )
}

//NEW
async function newFlight(req, res) {
  const airlineOptions = await Flight.schema.path('airline').enumValues
  const airportOptions = await Flight.schema.path('airport').enumValues

  res.render('flights/new', 
    {
      title: 'Create New Flight',
      airlines: airlineOptions.sort(),
      airports: airportOptions.sort(),
    }
  )
}