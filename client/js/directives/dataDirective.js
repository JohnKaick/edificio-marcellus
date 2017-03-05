angular.module('apImobiliaria').directive('data', function () {
    return {
        scope: {
            ngModel: '=',
            required: '='
        },
        templateUrl: '/view/data.html',
        controller: ['$scope', function ($scope) {
            $scope.format = 'dd/MM/yyyy'
            $scope.opened = false
            $scope.open = function () {
                $scope.opened = !$scope.opened
            }
        }]
    }
})
