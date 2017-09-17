angular.module('apImobiliaria').service('imobiliariaAPI', function ($http) {

  this.obterLista = function () {
    return $http.get('/api/imobiliaria')
  }

  this.obterListaAtiva = function () {
    return $http.get('/api/imobiliaria/ativo')
  }

  this.obterListaInativa = function () {
    return $http.get('/api/imobiliaria/inativo')
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
