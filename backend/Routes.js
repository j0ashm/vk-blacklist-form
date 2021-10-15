const express = require('express')
const router = express.Router()
const Blacklist = require('./Model')

router.post('/create', (req, res) => {
    Blacklist.create(req.body).then((bl) => {
        console.log(bl)
        res.status(200).send('Success!')
    }).catch((err) => {
        console.error(err)
    })
})

module.exports = router