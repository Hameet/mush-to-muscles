// const server = require('./server')

// const port = process.env.PORT || 3000

// server.listen(port, function () {
//   console.log('Listening on port', port)
// })



var Knex = require('knex')
var config = require('../knexfile')[process.env.NODE_ENV || 'development']
var knex = Knex(config)

var server = require('./server')
server.set('db', knex)
var PORT = process.env.PORT || 3000

server.listen(PORT, function () {
  console.log('Listening on port', PORT)
})
