angular.module('directives.card', [])
.directive('card', function() {
    return {
        restrict: 'AE',
        controller: ['$scope', function($scope) {
            $scope.update = function() {
                $scope.totalEffort = $scope.getTotalEffort($scope.boardSection.cards);
            };
        }],
        templateUrl: './js/partials/card.tpl.html'
    };
});