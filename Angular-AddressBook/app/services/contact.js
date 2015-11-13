angular.module('app.service.contact', ['ngResource'])
       //.service('', function() {}) // new function
       .factory('Contact', ['$resource', function($resource) {
           return $resource('http://localhost:3000/contacts/:contactId', {contactId: '@id'});

       }]); // function()
