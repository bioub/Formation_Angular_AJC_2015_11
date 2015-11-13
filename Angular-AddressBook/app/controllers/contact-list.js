angular.module('app.controller.contact.list', [
    'app.service.contact',
    'ui.bootstrap'
])
    .controller('ContactListCtrl', ['$scope', 'Contact', '$uibModal',
        function ($scope, Contact, $uibModal) {


        $scope.contacts = Contact.query();

        $scope.supprimer = function(i) {

            // TODO Ne pas utiliser confirm (bloquant)
            var result = confirm('Êtes-vous sûr de vouloir supprimer ce contact ?');

            if (result) {
                $scope.contacts[i].$delete(function() {
                    $scope.contacts.splice(i, 1);
                });
            }
        };


    }]);

