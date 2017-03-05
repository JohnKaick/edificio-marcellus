angular.module('apImobiliaria').controller('cadastrarImobiliariaCtrl', function ($scope, $uibModalInstance, imobiliariaAPI, imobiliaria) {

    $scope.imobiliaria = imobiliaria || {}

    $scope.salvar = function (imobiliaria) {
        if (!imobiliaria.sid) {
            imobiliariaAPI.criarImobiliaria(imobiliaria).then(function () {
                $uibModalInstance.close()
            }).catch($scope.message)
        } else {
            imobiliariaAPI.editarImobiliaria(imobiliaria).then(function () {
                $uibModalInstance.close();
            }).catch($scope.message)
        }
    }

    $scope.cancelar = function () {
        $uibModalInstance.dismiss();
    }

})
