const db = require('../../database')
const sidCache = require('../../helpers/sid')

module.exports.create = function (request, reply) {
    sidCache.translate(request.params.imobiliaria_sid, 'Imobiliaria').then((imobiliariaId) => {
        return db.Imobiliaria.forge({ 'id': imobiliariaId }).save({
            data_ultimo: request.payload.data_contato ? new Date(request.payload.data_contato) : new Date()
        }).then(() => {
            return db.Contato.forge({
                imobiliaria_id: imobiliariaId,
                status: request.payload.status,
                descricao: request.payload.descricao,
                data_contato: request.payload.data_contato ? new Date(request.payload.data_contato) : new Date()
            }).save()
        }).then((contato) => {
            reply(contato)
        }).catch(err => {
            reply.badImplementation(err)
        })
    })
}

module.exports.destroy = function (request, reply) {
    sidCache.translate(request.params.sid, 'Contato').then((Id) => {
        return db.Contato.forge({ 'id': Id }).destroy().then(() => {
            reply({ success: true })
        }).catch(err => {
            reply.badImplementation(err)
        })
    })
}