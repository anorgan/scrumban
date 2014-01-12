angular.module('projects', [
])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
    	.when('/projects', {
        	templateUrl: './js/partials/projects.tpl.html',
        	controller: 'ProjectsCtrl'
    	})
        .when('/projects/:id', {
          	templateUrl: './js/partials/project.tpl.html',
          	controller: 'ProjectCtrl'
        })
    ;
}])

.controller('ProjectsCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.projects = [];

    $scope.addProject = function() {
        $scope.projects.push({title: $scope.projectTitle, code: $scope.projectCode, id: $scope.projects.length + 1});
        $scope.projectTitle = '';
        $scope.projectCode = '';
    };
}])

.controller('ProjectCtrl', ['$scope', '$location', function ($scope, $location) {
	$scope.projects = [];
}]);