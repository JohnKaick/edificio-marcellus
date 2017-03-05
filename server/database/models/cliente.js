const shortId = require('shortid')

module.exports = (bookshelf) => {
  return bookshelf.Model.extend({
    tableName: 'cliente',
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
    imobiliaria: function () {
      return this.belongsTo(bookshelf.Imobiliaria)
    }
  })
}
