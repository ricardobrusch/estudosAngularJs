var diretivas = angular.module('Diretivas', []);

diretivas.controller('DiretivasController', function($scope){
	$scope.mensagem = function(msg) {
		alert(msg);
	}
});
