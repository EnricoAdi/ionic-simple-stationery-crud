const stationeriesRouter = require('./stationeries.route')
const express = require('express')
const router = express()
router.use('/stationeries', stationeriesRouter) 

module.exports= router;