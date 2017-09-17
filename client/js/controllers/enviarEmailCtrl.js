angular.module('apImobiliaria').controller('enviarEmailCtrl', function ($scope, $uibModalInstance, emailAPI) {

    $scope.email = null

    $scope.carregarMensagem = function () {
        emailAPI.mensagem().then(function (result) {
            $scope.email = result.data
        }).catch(function (data) {
            $scope.message = 'Error: ' + data
        })
    }

    $scope.enviar = function (email) {
        emailAPI.enviarMensagem(email).then(function () {
            $uibModalInstance.close()
        }).catch($scope.message)
    }

    $scope.cancelar = function () {
        $uibModalInstance.dismiss();
    }

    $scope.carregarMensagem()
})
