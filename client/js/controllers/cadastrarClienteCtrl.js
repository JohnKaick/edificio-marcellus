angular.module('apImobiliaria').controller('cadastrarClienteCtrl', function ($scope, $uibModalInstance, clienteAPI, imobiliariaId) {

    $scope.salvar = function (cliente) {
        cliente.imobiliaria_sid = imobiliariaId
        clienteAPI.criarCliente(cliente).then(function () {
            $uibModalInstance.close();
        }).catch($scope.message)
    }

    $scope.cancelar = function () {
        $uibModalInstance.dismiss();
    }

})
