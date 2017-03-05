const handlers = require('./handlers.js')

module.exports = [
    {
        path: '/api/contato/{imobiliaria_sid}',
        method: 'PUT',
        config: {
            handler: handlers.create,
            auth: false
        }
    },
    {
        path: '/api/contato/{sid}',
        method: 'DELETE',
        config: {
            handler: handlers.destroy,
            auth: false
        }
    }
]
