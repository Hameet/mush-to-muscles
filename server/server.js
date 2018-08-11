const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')


const exercises = require('./routes/exercises')

const server = express()

server.use(cors('*'))

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))


server.use('/api/exercises', exercises)

module.exports = server
