const handlers = require('./handlers.js')

module.exports = [
  {
    path: '/api/imobiliaria',
    method: 'GET',
    config: {
      handler: handlers.getMany,
      auth: false
    }
  },
  {
    path: '/api/imobiliaria/ativo',
    method: 'GET',
    config: {
      handler: handlers.getManyAtivo,
      auth: false
    }
  },
  {
    path: '/api/imobiliaria/inativo',
    method: 'GET',
    config: {
      handler: handlers.getManyInativo,
      auth: false
    }
  },
  {
    path: '/api/imobiliaria/{sid}',
    method: 'GET',
    config: {
      handler: handlers.getOne,
      auth: false
    }
  },
  {
    path: '/api/imobiliaria',
    method: 'PUT',
    config: {
      handler: handlers.create,
      auth: false
    }
  },
  {
    path: '/api/imobiliaria/{sid}',
    method: 'POST',
    config: {
      handler: handlers.update,
      auth: false
    }
  },
  {
    path: '/api/imobiliaria/{sid}',
    method: 'DELETE',
    config: {
      handler: handlers.destroy,
      auth: false
    }
  }
]
