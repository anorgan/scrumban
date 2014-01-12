angular.module('projects', [
])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    	.when('/projects', {
        	templateUrl: './js/partials/projects.tpl.html',
        	controller: 'ProjectsCtrl'
    	})
        .when('/projects/:id', {
          	templateUrl: './js/partials/projects.tpl.html',
          	controller: 'ProjectCtrl'
        })
    ;
}])

.controller('ProjectsCtrl', ['$scope', '$location', function ($scope, $location) {
	$scope.projects = [];
}]);


.controller('ProjectCtrl', ['$scope', '$location', function ($scope, $location) {
	$scope.projects = [];
}]);