
angular.module('resources.boardSections', [
    'ngResource'
]);

angular.module('resources.boardSections').factory('BoardSectionService', ['$resource', function ($resource) {
    var sections = [
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
    
    var BoardSectionService = $resource('https://api.mongolab.com/api/1/databases' +
        '/scrumban/collections/boardSections/:id',
        { apiKey: '5112196ae4b0cb76f73fc95e' }, {
            update: { method: 'PUT' }
        }
    );

    BoardSectionService.getAll = function(cb) {
        return BoardSectionService.query();
    };

    BoardSectionService.prototype.update = function(cb) {
        return BoardSectionService.update({id: this._id.$oid},
        angular.extend({}, this, {_id:undefined}), cb);
    };

    BoardSectionService.prototype.destroy = function(cb) {
        return BoardSectionService.remove({id: this._id.$oid}, cb);
    };

    return BoardSectionService;
}]);