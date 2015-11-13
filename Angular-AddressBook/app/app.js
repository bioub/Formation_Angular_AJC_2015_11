
angular.module('app', [
    'ngRoute',
    'app.controller.contact.list'
])
    .config(['$routeProvider', function($routeProvider) {

        $routeProvider
            .when('/', {
                templateUrl: 'app/views/contact-list.html',
                controller: 'ContactListCtrl'
            })
            .when('/ajouter', {
                templateUrl: 'app/views/contact-add.html',
                controller: 'ContactAddCtrl'
            })
            .otherwise('/');
    }]);