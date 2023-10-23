const Flight = require('../models/flight')

module.exports = {
  index, 
  new: newFlight,
  create: createFlight,
  show: showFlight
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

//CREATE
async function createFlight(req, res) {
  req.body.departureDate = new Date(req.body.departureDate)
  
  try {
    await Flight.create(req.body)
    res.redirect('/flights')
  } catch {
    //console.log(err)
    //res.render('flights/new', {errorMsg: err.message})
  }
}

//SHOW
async function showFlight(req, res) {
  const flight = await Flight.findById(req.params.id).populate('destinations').populate('tickets')
  
  const destinationAirports = Flight.schema.path('destinations.destinationAirport').enumValues
  flight.departureDate = new Date(flight.departureDate)
  
  // const tickets = 
  // console.log(flight.destinations)
  
  try {
    res.render('flights/show', 
      {
        title: 'Flight Details',
        flight: flight,
        destinationAirports: destinationAirports
      }
    )
  } catch {
    //console.log(err)
    //res.render('flights/new', {errorMsg: err.message})
  }
}