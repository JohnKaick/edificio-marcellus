angular.module('apImobiliaria').controller('cadastrarContatoCtrl', function ($scope, $uibModalInstance, contatoAPI, imobiliariaId, swal) {

    $scope.salvar = function (contato) {
        contato.imobiliaria_sid = imobiliariaId
        contatoAPI.criarContato(contato).then(function () {
            $uibModalInstance.close()
            swal(
                'Atenção',
                'Após o contato adicionado, a imobiliária ficará nas últimas posições da lista!',
                'info'
            );
        }).catch($scope.message)
    }

    $scope.cancelar = function () {
        $uibModalInstance.dismiss();
    }

})
