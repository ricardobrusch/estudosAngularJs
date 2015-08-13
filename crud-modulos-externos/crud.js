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


usuarios.factory('UsuarioModel', function($resource){
	return $resource('server-resources/usuarios');
});


usuarios.controller('UsuariosController', function($scope, UsuarioModel){
	$scope.usuarios = UsuarioModel.query();
});
