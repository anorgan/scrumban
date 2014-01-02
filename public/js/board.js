angular.module('board', [])

.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: './js/partials/board.tpl.html',
        controller: 'BoardCtrl'
    });
}])

.controller('BoardCtrl', ['$scope', '$location', function ($scope, $location) {
    $scope.sections = [
        {
            id: 'backlog',
            title: 'Backlog',
            cards: [
                {
                    type: 'user-story',
                    status: 'backlog',
                    title: 'User can sign up for an account',
                    team: 'Dev',
                    project: 'Acme',
                    release: 'R2',
                    itteration: 'I5',
                    effort: 3
                },
            ]
        },
        {
            id: 'in-progress',
            title: 'In progress',
            velocity: 3,
            cards: [
                {
                    type: 'user-story',
                    status: 'in-progress',
                    title: 'User can sign out of her profile',
                    team: 'Dev',
                    project: 'Acme',
                    release: 'R2',
                    itteration: 'I2',
                    effort: 1
                },
                {
                    type: 'user-story',
                    status: 'in-progress',
                    title: 'User can request a new password',
                    team: 'Dev',
                    project: 'Acme',
                    release: 'R2',
                    itteration: 'I2',
                    effort: 1
                },
            ]
        },
        {
            id: 'testing',
            title: 'Testing',
            velocity: 4,
            cards: [
                {
                    type: 'user-story',
                    status: 'testing',
                    title: 'User can register',
                    team: 'Dev',
                    project: 'Acme',
                    release: 'R2',
                    itteration: 'I2',
                    effort: 5
                },
            ]
        },
        {
            id: 'done',
            title: 'Done',
            cards: [
                {
                    type: 'user-story',
                    status: 'done',
                    title: 'User can see pricing table',
                    team: 'Dev',
                    project: 'Acme',
                    release: 'R2',
                    itteration: 'I2',
                    effort: 4
                },
            ]
        },
    ];

    $scope.getTotalEffort = function(cards) {
        var effort = 0;
        angular.forEach(cards, function(card) {
            effort += parseInt(card.effort);
        });
        return effort;
    };

}]);