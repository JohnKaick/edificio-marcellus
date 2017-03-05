const handlers = require('./handlers.js')

module.exports = [
    {
        path: '/api/cliente/{imobiliaria_sid}',
        method: 'PUT',
        config: {
            handler: handlers.create,
            auth: false
        }
    },
    {
        path: '/api/cliente/{sid}',
        method: 'DELETE',
        config: {
            handler: handlers.destroy,
            auth: false
        }
    }
]
