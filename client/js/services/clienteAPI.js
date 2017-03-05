angular.module('apImobiliaria').service('clienteAPI', function ($http) {

    this.criarCliente = function (cliente) {
        return $http.put('/api/cliente/' + cliente.imobiliaria_sid, cliente)
    }

    this.apagarCliente = function (cliente) {
        return $http.delete('/api/cliente/' + cliente.sid)
    }
    
})
