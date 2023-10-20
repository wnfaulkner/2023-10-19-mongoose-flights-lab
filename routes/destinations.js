const express = require('express');
const router = express.Router();

const destinationsCtrl = require('../controllers/destinations')

// POST /flights/:id/destination
router.post('/:id/destinations', destinationsCtrl.create)

module.exports = router;