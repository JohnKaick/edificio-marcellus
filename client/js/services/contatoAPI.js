angular.module('apImobiliaria').service('contatoAPI', function ($http) {

    this.criarContato = function (contato) {
        return $http.put('/api/contato/' + contato.imobiliaria_sid, contato)
    }

    this.apagarContato = function (contato) {
        return $http.delete('/api/contato/' + contato.sid)
    }

})
