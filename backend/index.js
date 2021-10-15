const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()

const app = express()

mongoose.connect(process.env.DB_URL)
mongoose.Promise = global.Promise

app.use(express.static('public'))
app.use(express.json())

app.use('/api', require('./Routes'))

app.use((err, req, res, next) => {
    res.status(422).send({error: err.message})
})

app.listen(5000, () => {
    console.log('Server is up!')
});