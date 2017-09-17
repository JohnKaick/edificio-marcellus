const shortId = require('shortid')

module.exports = (bookshelf) => {
    return bookshelf.Model.extend({
        tableName: 'email',
    })
}
