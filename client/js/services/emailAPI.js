angular.module('apImobiliaria').service('emailAPI', function ($http) {

    this.mensagem = function () {
        return $http.get('/api/email')
    }

    this.enviarMensagem = function (email) {
        return $http.post('/api/email/enviar', email)
    }

})
