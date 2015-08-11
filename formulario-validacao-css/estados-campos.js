var log = function(dado) {
	console.log(dado);
}

var diretivas = angular.module('Formulario', []);

diretivas.directive('minIdade', function(){
	
});


diretivas.controller('FormController', function($scope){
	
	var limpaForm = function(){
		$scope.formulario = '';
	}

	$scope.salvar = function(dadosFormulario){
		$scope.salvo = dadosFormulario;
		log(dadosFormulario);
		limpaForm();
	}

	$scope.reset = limpaForm;

});