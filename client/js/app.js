angular.module('apImobiliaria', ['ngRoute', 'ui.bootstrap', 'ui-notification', ngSweetAlert2]).config(function ($routeProvider, NotificationProvider) {

    $routeProvider.when('/imobiliaria', {
        templateUrl: '/view/imobiliaria.html',
        controller: 'imobiliariaCtrl'
    })

    $routeProvider.otherwise({ redirectTo: '/imobiliaria' })

    NotificationProvider.setOptions({
        delay: 3000,
        startTop: 20,
        startRight: 10,
        verticalSpacing: 20,
        horizontalSpacing: 20,
        positionX: 'right',
        positionY: 'bottom'
    })
})
