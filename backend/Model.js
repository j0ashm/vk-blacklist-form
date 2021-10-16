const mongoose = require('mongoose')
const Schema = mongoose.Schema

const BlacklistSchema = new Schema({
    submissionDate: {
        type: Date,
        default: Date.now()
    },
    submitterUsername: {
        type: String,
        required: true
    },
    toBLUsername: {
        type: String,
        required: true
    },
    profileLink: {
        type: String,
        required: true
    },
    discordID: {
        type: String,
        required: true
    },
    blReason: {
        type: String,
        required: true
    },
    evidence: {
        type: String,
        required: true
    },
    division: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})

const Blacklist = mongoose.model('blacklist', BlacklistSchema)

module.exports = Blacklist