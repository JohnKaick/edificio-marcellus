const db = require('../../database')
const sidCache = require('../../helpers/sid')

module.exports.create = function (request, reply) {
    sidCache.translate(request.params.imobiliaria_sid, 'Imobiliaria').then((imobiliariaId) => {
        return db.Cliente.forge({
            imobiliaria_id: imobiliariaId,
            nome: request.payload.nome,
            telefone: request.payload.telefone,
            data_visita: request.payload.data_visita ? new Date(request.payload.data_visita) : new Date(),
            valor_oferta: request.payload.valor_oferta,
            status: request.payload.status,
            feedback: request.payload.feedback
        }).save().then((cliente) => {
            reply(cliente)
        }).catch(err => {
            reply.badImplementation(err)
        })
    })
}

module.exports.destroy = function (request, reply) {
    sidCache.translate(request.params.sid, 'Cliente').then((Id) => {
        return db.Cliente.forge({ 'id': Id }).destroy().then(() => {
            reply({ success: true })
        }).catch(err => {
            reply.badImplementation(err)
        })
    })
}