const express = require('express')
const router = express.Router()
const { verifyToken } = require('../helpers')

const userRoutes = require('./user')
const logRoutes = require('./log')

router.use('/user', userRoutes)
// router.use('/log', verifyToken, logRoutes)
router.use('/log', logRoutes)

module.exports = router, verifyToken