angular.module('app.controller.contact.add', ['app.service.contact'])
    .controller('ContactAddCtrl', ['$scope', 'Contact', function ($scope, Contact) {

        $scope.ajouter = function () {
            Contact.save($scope.newContact);

        };

    }]);