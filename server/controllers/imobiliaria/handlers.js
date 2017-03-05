const db = require('../../database')
const sidCache = require('../../helpers/sid')

module.exports.getMany = function (request, reply) {
  db.Imobiliaria.query((qb) => {
    qb.orderBy('data_ultimo', 'asc')
  }).fetchAll({
    withRelated: [
      { contatos: (qb) => { qb.orderBy('data_contato', 'desc') } },
      { clientes: (qb) => { qb.orderBy('data_visita', 'desc') } }
    ]
  }).then((imobiliarias) => {
    reply(imobiliarias)
  }).catch(err => {
    reply.badImplementation(err)
  })
}

module.exports.getOne = function (request, reply) {
  sidCache.translate(request.params.sid, 'Imobiliaria').then((Id) => {
    return db.Imobiliaria.query((qb) => {
      qb.where('id', Id)
    }).fetch().then((imobiliaria) => {
      reply(imobiliaria)
    }).catch(err => {
      reply.badImplementation(err)
    })
  })
}

module.exports.create = function (request, reply) {
  let _pagar = null
  let _taxa = parseInt(request.payload.taxa_venda)
  let _valor = parseInt(request.payload.valor_venda)
  if (_valor && _taxa) {
    _pagar = (_valor * _taxa) / 100
  }
  db.Imobiliaria.forge({
    nome: request.payload.nome,
    endereco: request.payload.endereco,
    bairro: request.payload.bairro,
    telefone: request.payload.telefone,
    corretor: request.payload.corretor,
    status: request.payload.status ? request.payload.status : 'Ativo',
    taxa_venda: request.payload.taxa_venda,
    valor_venda: request.payload.valor_venda,
    valor_pago: _pagar,
    data_criado: request.payload.data_criado ? new Date(request.payload.data_criado) : new Date()
  }).save().then((imobiliaria) => {
    reply(imobiliaria)
  }).catch(err => {
    reply.badImplementation(err)
  })
}

module.exports.update = function (request, reply) {
  let _pagar = null
  let _taxa = parseInt(request.payload.taxa_venda)
  let _valor = parseInt(request.payload.valor_venda)
  if (_valor && _taxa) {
    _pagar = (_valor * _taxa) / 100
  }
  sidCache.translate(request.params.sid, 'Imobiliaria').then((Id) => {
    return db.Imobiliaria.forge({ 'id': Id }).save({
      nome: request.payload.nome,
      endereco: request.payload.endereco,
      bairro: request.payload.bairro,
      telefone: request.payload.telefone,
      corretor: request.payload.corretor,
      status: request.payload.status ? request.payload.status : 'Ativo',
      taxa_venda: request.payload.taxa_venda,
      valor_venda: request.payload.valor_venda,
      valor_pago: _pagar,
      data_criado: request.payload.data_criado ? new Date(request.payload.data_criado) : new Date()
    }).then((imobiliaria) => {
      reply(imobiliaria)
    }).catch(err => {
      reply.badImplementation(err)
    })
  })
}

module.exports.destroy = function (request, reply) {
  sidCache.translate(request.params.sid, 'Imobiliaria').then((Id) => {
    return db.Imobiliaria.forge({ 'id': Id }).destroy().then(() => {
      reply({ success: true })
    }).catch(err => {
      reply.badImplementation(err)
    })
  })
}