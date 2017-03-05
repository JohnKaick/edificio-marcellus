exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('imobiliaria', function (table) {
      table.increments('id').primary()
      table.string('sid', 14).notNullable()
      table.string('nome', 255)
      table.string('endereco', 255)
      table.string('bairro', 255)
      table.string('telefone', 255)
      table.string('corretor', 255)
      table.enu('status', ['Ativo', 'Inativo'])
      table.integer('taxa_venda')
      table.integer('valor_venda')
      table.integer('valor_pago')
      table.date('data_criado')
      table.date('data_ultimo')
    }),
    knex.schema.createTable('contato', function (table) {
      table.increments('id').primary()
      table.string('sid', 14).notNullable()
      table.integer('imobiliaria_id').notNullable().unsigned().references('id').inTable('imobiliaria')
      table.enu('status', ['Positivo', 'Negativo'])
      table.string('descricao', 1020)
      table.date('data_contato')
    }),
    knex.schema.createTable('cliente', function (table) {
      table.increments('id').primary()
      table.string('sid', 14).notNullable()
      table.integer('imobiliaria_id').notNullable().unsigned().references('id').inTable('imobiliaria')
      table.string('nome', 255)
      table.string('telefone', 255)
      table.date('data_visita')
      table.integer('valor_oferta')
      table.enu('status', ['Satisfeito', 'Insatisfeito'])
      table.string('feedback', 1020)
    })
  ])
}

exports.down = function (knex, Promise) {
  return Promise.all([
    knex.schema.dropTable('cliente'),
    knex.schema.dropTable('contato'),
    knex.schema.dropTable('imobiliaria')
  ])
}
