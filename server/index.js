const Hapi = require('hapi')

const server = new Hapi.Server()

server.connection({ port: process.env.PORT || 9090 })

server.register(require('./structure/server.plugins'), function (err) {
  if (err) {
    console.error('ERROR: ' + err)
  } else {
    require('./structure/server.routes')(server)
  }
})


module.exports = server
