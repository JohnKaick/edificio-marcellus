const handlers = require('./handlers.js')

module.exports = [
    {
        path: '/api/email',
        method: 'GET',
        config: {
            handler: handlers.get,
            auth: false
        }
    },
    {
        path: '/api/email/enviar',
        method: 'POST',
        config: {
            handler: handlers.send,
            auth: false
        }
    }
]
