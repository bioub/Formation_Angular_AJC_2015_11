// Module JavaScript :
// Limiter la portée des identifiants de ce fichier
// (variables et fonctions)

// Design Pattern : Immediately Invoked Function Expression
// IIFE
(function () {
	
	var appModule = angular.module('app', []);
	
	appModule.controller('PrenomCtrl', ['$scope', function($scope) {
		$scope.prenoms = ['Pierre', 'Martin', 'Jean'];
		
		$scope.ajouter = function() {
			$scope.prenoms.push($scope.prenom);
		};
		
		$scope.supprimer = function(i) {
			$scope.prenoms.splice(i, 1);
		};
		
		
		
	}]);
	
}());

