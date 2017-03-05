angular.module('apImobiliaria').service('imobiliariaAPI', function ($http) {

  this.obterLista = function () {
    return $http.get('/api/imobiliaria')
  }

  this.obterImobiliaria = function (imobiliaria) {
    return $http.get('/api/imobiliaria/' + imobiliaria.sid)
  }

  this.criarImobiliaria = function (imobiliaria) {
    return $http.put('/api/imobiliaria', imobiliaria)
  }

  this.editarImobiliaria = function (imobiliaria) {
    return $http.post('/api/imobiliaria/' + imobiliaria.sid, imobiliaria)
  }

  this.apagarImobiliaria = function (imobiliaria) {
    return $http.delete('/api/imobiliaria/' + imobiliaria.sid)
  }

})
