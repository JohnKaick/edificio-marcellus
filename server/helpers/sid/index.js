const db = require('./../../database')
const Promise = require('bluebird')

module.exports.translate = function (sid, tabela) {
    if (!sid) {
        return Promise.resolve(null)
    }
    return new Promise(function (resolve, reject) {
        db[tabela].query((qb) => {
            qb.where('sid', sid)
        }).fetch({
            columns: ['id']
        }).then((model) => {
            if (!model) return reject(new Error('SID nao encontrado'))
            resolve(model.id)
        }).catch(reject)
    })
}