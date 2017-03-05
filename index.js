const server = require('./server')

server.start((err) => {
  if (err) {
    console.error('Server error: ', err)
  } else {
    console.log('Server started at: ', server.info.uri)
  }
})
