const knex = require('knex')({
  client: process.env.DB_DIALECT,
  connection: {
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
  }
})

const bookshelf = require('bookshelf')(knex)

bookshelf.plugin('visibility')
bookshelf.plugin(require('bookshelf-cascade-delete'))

bookshelf.Imobiliaria = require('./models/imobiliaria')(bookshelf)
bookshelf.Contato = require('./models/contato')(bookshelf)
bookshelf.Cliente = require('./models/cliente')(bookshelf)
bookshelf.Email = require('./models/email')(bookshelf)

module.exports = bookshelf
