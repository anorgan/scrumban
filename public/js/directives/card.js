angular.module('directives.card', [])
.directive('card', function() {
    return {
        restrict: 'AE',
        controller: ['$scope', function($scope) {
            $scope.update = function() {
                $scope.$emit('card.update', $scope.card);
            };
        }],
        templateUrl: './js/partials/card.tpl.html'
    };
});