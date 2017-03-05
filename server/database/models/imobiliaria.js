const shortId = require('shortid')

module.exports = (bookshelf) => {
  return bookshelf.Model.extend({
    tableName: 'imobiliaria',
    hidden: ['id'],
    constructor: function () {
      bookshelf.Model.apply(this, arguments)
      this.on('saving', function (model, attrs, options) {
        if (!model.isNew()) {
          return
        }
        model.set('sid', shortId.generate())
      })
    },
    contatos: function () {
      return this.hasMany(bookshelf.Contato, 'imobiliaria_id')
    },
    clientes: function () {
      return this.hasMany(bookshelf.Cliente, 'imobiliaria_id')
    }
  }, {
      dependents: ['contatos', 'clientes']
    })
}
