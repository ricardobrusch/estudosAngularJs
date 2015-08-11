var diretivas = angular.module('Diretivas', []);

diretivas.controller('DiretivasController', function($scope){
	$scope.dev = 'Ricardo Brusch';
	$scope.idadeDoCara = 26;
});

diretivas.directive('diretivaExemplo', function(){
	return {
		//template: 'Desenvolvido com Angular por <strong> {{dev}} </strong>',
		templateUrl: function(){
			return 'template/desenvolvimento.html'
		}
	}
});


diretivas.directive('diretivaComParam', function(){
	return {
		//template: 'Desenvolvido com Angular por <strong> {{dev}} </strong>',
		templateUrl: function(elem, attr){
			if (!attr.texto) {
				var arquivo = 'desenvolvimento';
			} else {
				var arquivo = attr.texto;
			}
			return 'template/'+arquivo+'.html'
		}
	}
});