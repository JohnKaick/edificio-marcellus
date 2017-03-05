const goodOptions = {
  ops: {
    interval: 1000
  },
  reporters: {
    console: [
      {
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [{ log: '*', response: '*', request: '*' }]
      },
      {
        module: 'good-console'
      },
      'stdout'
    ]
  }
}

module.exports = [
  { register: require('good'), options: goodOptions },
  { register: require('inert') },
  { register: require('hapi-boom-decorators') }
]
