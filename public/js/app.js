'use strict';

angular.module('app', [
    'ngRoute',
    'directives.card',
    'directives.boardSection',
    'board'
]);

angular.module('app').config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider.otherwise({redirectTo:'/'});
}]);