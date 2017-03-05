const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    database: 'db_imobiliaria',
    user: 'root',
    password: '087654321'
  }
})

const bookshelf = require('bookshelf')(knex)

bookshelf.plugin('visibility')
bookshelf.plugin(require('bookshelf-cascade-delete'))

bookshelf.Imobiliaria = require('./models/imobiliaria')(bookshelf)
bookshelf.Contato = require('./models/contato')(bookshelf)
bookshelf.Cliente = require('./models/cliente')(bookshelf)

module.exports = bookshelf
