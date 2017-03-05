angular.module('apImobiliaria').controller('imobiliariaCtrl', function ($scope, $uibModal, imobiliariaAPI, contatoAPI, clienteAPI, Notification, swal) {

  $scope.listas = []

  $scope.carregaLista = function () {
    imobiliariaAPI.obterLista().then(function (result) {
      $scope.listas = result.data
    }).catch(function (data) {
      $scope.message = 'Error: ' + data
    })
  }

  $scope.cadastrarImobiliaria = function () {
    $uibModal.open({
      templateUrl: '/view/form-imobiliaria.html',
      controller: 'cadastrarImobiliariaCtrl',
      resolve: {
        imobiliaria: function () {
          return null
        }
      }
    }).result.then(function () {
      Notification.success('Imobiliária cadastrada com sucesso!')
      $scope.carregaLista()
    })
  }

  $scope.editarImobiliaria = function (imob) {
    $uibModal.open({
      templateUrl: '/view/form-imobiliaria.html',
      controller: 'cadastrarImobiliariaCtrl',
      resolve: {
        imobiliaria: function () {
          return angular.copy(imob)
        }
      }
    }).result.then(function () {
      Notification.primary('Imobiliária atualizada com sucesso!')
      $scope.carregaLista()
    })
  }

  $scope.cadastrarContato = function (imobiliaria) {
    $uibModal.open({
      templateUrl: '/view/form-contato.html',
      controller: 'cadastrarContatoCtrl',
      resolve: {
        imobiliariaId: function () {
          return imobiliaria.sid
        }
      }
    }).result.then(function () {
      Notification.success('Contato adicionado com sucesso!')
      $scope.carregaLista()
    })
  }

  $scope.cadastrarCliente = function (imobiliaria) {
    $uibModal.open({
      templateUrl: '/view/form-cliente.html',
      controller: 'cadastrarClienteCtrl',
      resolve: {
        imobiliariaId: function () {
          return imobiliaria.sid
        }
      }
    }).result.then(function () {
      Notification.success('Visita adicionada com sucesso!')
      $scope.carregaLista()
    })
  }

  $scope.excluirImobiliaria = function (imobiliaria) {
    if (imobiliaria) {
      swal({
        title: 'Tem certeza?',
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#2c3e50',
        cancelButtonColor: '#95a5a6',
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar'
      }).then(function () {
        imobiliariaAPI.apagarImobiliaria(imobiliaria).then(function (result) {
          $scope.carregaLista()
          swal(
            'Excluído!',
            'Imobiliária excluída com sucesso.',
            'success'
          )
        }).catch(function (data) {
          $scope.message = 'Error: ' + data
        })
      })
    }
  }

  $scope.excluirContato = function (contato) {
    contatoAPI.apagarContato(contato).then(function (result) {
      Notification.error('Contato excluído com sucesso!')
      $scope.carregaLista()
    }).catch(function (data) {
      $scope.message = 'Error: ' + data
    })
  }

  $scope.excluirCliente = function (cliente) {
    clienteAPI.apagarCliente(cliente).then(function (result) {
      Notification.error('Visita excluída com sucesso!')
      $scope.carregaLista()
    }).catch(function (data) {
      $scope.message = 'Error: ' + data
    })
  }

  $scope.carregaLista()

})
