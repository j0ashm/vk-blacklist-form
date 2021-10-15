const express = require('express')
const router = express.Router()
const Blacklist = require('./Model')

const nodemailer = require('nodemailer')
require('dotenv').config()

var mailer = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
    }
})

router.post('/create/gar', (req, res) => {
    Blacklist.create(req.body).then((bl) => {
        const { submitterUsername, toBLUsername, profileLink, discordID, blReason, division, duration, status } = bl
        let mailBody = `**[${division}] Blacklist**\n\n________\n**Username:** ${toBLUsername}\n**ROBLOX Profile Link:** ${profileLink}\n**Discord ID:** ${discordID}\n________\n**Reason:** ${blReason}\n**Duration:** ${duration}\n**Status:** ${status}\n**Assigned by:** ${submitterUsername}`

        mailer.sendMail({
            from: process.env.GMAIL_USER,
            to: process.env.GAR_EMAIL,
            subject: toBLUsername,
            text: mailBody
        }, (err, info) => {
            if (err) {
                console.log(err)
            } else {
                console.log(`Email successfully sent!`, info.response)
            }
        })
        res.status(200).send('Success!')
    }).catch((err) => {
        console.error(err)
    })
})

router.post('/create/tsu', (req, res) => {
    Blacklist.create(req.body).then((bl) => {
        const { submitterUsername, toBLUsername, profileLink, discordID, blReason, division, duration, status } = bl
        let mailBody = `**[${division}] Blacklist**\n\n________\n**Username:** ${toBLUsername}\n**ROBLOX Profile Link:** ${profileLink}\n**Discord ID:** ${discordID}\n________\n**Reason:** ${blReason}\n**Duration:** ${duration}\n**Status:** ${status}\n**Assigned by:** ${submitterUsername}`

        mailer.sendMail({
            from: process.env.GMAIL_USER,
            to: process.env.TSU_EMAIL,
            subject: toBLUsername,
            text: mailBody
        }, (err, info) => {
            if (err) {
                console.log(err)
            } else {
                console.log(`Email successfully sent!`, info.response)
            }
        })
        res.status(200).send('Success!')
    }).catch((err) => {
        console.error(err)
    })
})

router.post('/create/hre', (req, res) => {
    Blacklist.create(req.body).then((bl) => {
        const { submitterUsername, toBLUsername, profileLink, discordID, blReason, division, duration, status } = bl
        let mailBody = `**[${division}] Blacklist**\n\n________\n**Username:** ${toBLUsername}\n**ROBLOX Profile Link:** ${profileLink}\n**Discord ID:** ${discordID}\n________\n**Reason:** ${blReason}\n**Duration:** ${duration}\n**Status:** ${status}\n**Assigned by:** ${submitterUsername}`

        mailer.sendMail({
            from: process.env.GMAIL_USER,
            to: process.env.HRE_EMAIL,
            subject: toBLUsername,
            text: mailBody
        }, (err, info) => {
            if (err) {
                console.log(err)
            } else {
                console.log(`Email successfully sent!`, info.response)
            }
        })
        res.status(200).send('Success!')
    }).catch((err) => {
        console.error(err)
    })
})

module.exports = router