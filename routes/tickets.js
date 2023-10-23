const express = require('express');
const router = express.Router();

//console.log('tickets router called')

const ticketsCtrl = require('../controllers/tickets')

// POST /flights/:id/tickets (create)
router.post('/:id/tickets', ticketsCtrl.create)

module.exports = router;