const mongoose = require('mongoose')

const logSchema = new mongoose.Schema({
    username: {
        type: String
    },
    email: {
        type: String
    },
    title: {
        type: String
    },
    comments: {
        type: String
    },
    type: {
        type: String
    },
    otherData: {
        type: String
    },
    noteId: {
        type: String
    },
    date: {
        type: Date
    },
    hasTime: {
        type: Boolean
    },
    finish: {
        type: Date
    },
}, { timestamps: true })

const Log = mongoose.model('Log', logSchema)

module.exports = Log