const express = require('express')
const router = express.Router()
const { Log } = require('../db/models')

//Get all logs
router.get('/getAll', async (req, res, next) => {
    try {
        const logs = await Log.find().sort([['date', 'descending']])
        if (!logs) return res.status(404).send('No logs found.')

        res.status(200).json(logs)
    } catch (err) {
        console.error('Something went wrong!', err)
        res.send(500).send('Server Error')
    }
})

//Create new log
router.post('/create', async (req, res, next) => {
    try {
        const newLog = await Log.create(req.body)
        if (!newLog) return res.status(400).json('Error creating log')

        res.status(200).json(newLog)
    } catch (err) {
        console.error('Something went wrong!', err)
        res.send(500).send('Server Error')
    }
})

//Update log Data
router.post('/update', async (req, res, next) => {
    try {
        const { _id } = req.body
        let logData = { ...req.body }

        const updated = await Log.findByIdAndUpdate(_id, logData, { returnDocument: "after", useFindAndModify: false })
        if (!updated) return res.status(404).send('Error updating log.')

        res.status(200).json(updated)
    } catch (err) {
        console.error('Something went wrong!', err)
        res.send(500).send('Server Error')
    }
})

//Update log Data
router.post('/remove', async (req, res, next) => {
    try {
        const { _id } = req.body

        const deleted = await Log.findOneAndRemove({ _id })

        res.status(200).json(deleted)
    } catch (err) {
        console.error('Something went wrong!', err)
        res.send(500).send('Server Error')
    }
})


module.exports = router