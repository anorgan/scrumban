angular.module('board', [
    'resources.boardSections'
])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: './js/partials/board.tpl.html',
        controller: 'BoardCtrl'
    });
}])

.controller('BoardCtrl', ['$scope', '$location', 'BoardSections', function ($scope, $location, BoardSections) {
    $scope.sections = BoardSections.getAll();

    $scope.getTotalEffort = function(cards) {
        var effort = 0;
        angular.forEach(cards, function(card) {
            effort += parseInt(card.effort);
        });
        return effort;
    };

}]);