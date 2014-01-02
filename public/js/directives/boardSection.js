angular.module('directives.boardSection', [])
.directive('boardSection', function() {
    return {
        restrict: 'AE',
        controller: ['$scope', function($scope) {
            $scope.cards = $scope.boardSection.cards;
            $scope.totalEffort = $scope.getTotalEffort($scope.boardSection.cards);
            $scope.velocity = $scope.boardSection.velocity;
            $scope.addCard = function() {
                if (this.title) {
                    $scope.boardSection.cards.push({
                        title: this.title,
                        effort: 3
                    });
                    $scope.totalEffort = $scope.getTotalEffort($scope.boardSection.cards);
                    this.title = null;
                }
            };
        }],
        templateUrl: './js/partials/boardSection.tpl.html'
    };
});