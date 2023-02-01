const express = require('express')
const router = express.Router()
const { verifyToken } = require('../helpers')

const userRoutes = require('./user')
const reportRoutes = require('./report')

router.use('/user', userRoutes)
router.use('/report', verifyToken, reportRoutes)

module.exports = router, verifyToken