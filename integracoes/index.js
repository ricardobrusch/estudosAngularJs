var usuarios = angular.module('Usuarios', ['ngRoute', 'ngResource']);

/* Isso é pra não dar problema quando usar o minified */
usuarios.config(['$routeProvider', function($routeProvider){
	$routeProvider
		.when('/usuarios', {
			templateUrl: 'partials/home.html',
			controller: 'UsuariosController'
		})
		.when('/usuarios/adicionar', {
			templateUrl: 'partials/adicionar.html',
			controller: 'UsuariosController'
		})
		.when('/usuarios/editar/:codigo', {
			templateUrl: 'partials/editar.html',
			controller: 'UsuariosController'
		})
		.when('/usuarios/remover/:codigo', {
			templateUrl: 'partials/remover.html',
			controller: 'UsuariosController'
		})
}]);

usuarios.directive('botaoBs', function(){
	return {
		restrict: 'A', // usar somente como Atributo
		link: function($scope, elemento, atributo) {
			elemento.addClass('btn btn-'+atributo.botaoBs);
		}
	};
});

usuarios.directive('formControlBs', function(){
	return {
		restrict: 'A', // usar somente como Atributo
		link: function($scope, elemento, atributo) {
			elemento.find('input[type="text"]').addClass('form-control');
			elemento.find('input[type="password"]').addClass('form-control');
			elemento.find('input[type="email"]').addClass('form-control');
		}
	};
});