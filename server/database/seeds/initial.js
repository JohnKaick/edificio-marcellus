exports.seed = function (knex, Promise) {
  return knex('imobiliaria').del()
    .then(function () {
      return Promise.all([
        knex('imobiliaria').insert({ id: 1, sid: 'oesklgrj', nome: 'Mabe Consultoria Imobiliária', endereco: 'R. Boa Vista, 254 - 7º andar', telefone: 31164100 }),
        knex('imobiliaria').insert({ id: 2, sid: 'cvnmdksd', nome: 'Mira Jardim Neg. Imobiliários', endereco: 'R. Benjamin Constant, 153 - Cj 1201', telefone: 32426800 }),
        knex('imobiliaria').insert({ id: 3, sid: 'becvxgshc', nome: 'AF Assis Imóveis', endereco: 'Rua Barão de Iguape, 681', telefone: 32092025 })
      ])
    })
}
